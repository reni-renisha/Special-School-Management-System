from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import List, Optional
from datetime import date

from app.models.student import Student
from app.schemas.student import StudentCreate, StudentUpdate

def get_student(db: Session, student_id: int) -> Optional[Student]:
    return db.query(Student).filter(Student.id == student_id).first()

def get_student_by_admission_number(db: Session, admission_number: str) -> Optional[Student]:
    return db.query(Student).filter(Student.admission_number == admission_number).first()

def get_students(
    db: Session, 
    skip: int = 0, 
    limit: int = 100,
    search: Optional[str] = None,
    class_name: Optional[str] = None
) -> List[Student]:
    query = db.query(Student)
    
    if search:
        search_filter = or_(
            Student.name.ilike(f"%{search}%"),
            Student.admission_number.ilike(f"%{search}%"),
            Student.student_id.ilike(f"%{search}%")
        )
        query = query.filter(search_filter)
    
    if class_name:
        query = query.filter(Student.class_name == class_name)
    
    return query.offset(skip).limit(limit).all()

def create_student(db: Session, student: StudentCreate) -> Student:
    # Generate student_id (you can implement your own logic)
    current_year = date.today().year
    count = db.query(Student).count()
    student_id = f"STU{current_year}{str(count + 1).zfill(3)}"
    
    db_student = Student(
        student_id=student_id,
        created_at=date.today(),
        updated_at=date.today(),
        **student.dict()
    )
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

def update_student(
    db: Session, 
    student_id: int, 
    student_update: StudentUpdate
) -> Optional[Student]:
    db_student = get_student(db, student_id)
    if not db_student:
        return None
        
    update_data = student_update.dict(exclude_unset=True)
    update_data["updated_at"] = date.today()
    
    for field, value in update_data.items():
        setattr(db_student, field, value)
    
    db.commit()
    db.refresh(db_student)
    return db_student

def delete_student(db: Session, student_id: int) -> bool:
    db_student = get_student(db, student_id)
    if not db_student:
        return False
        
    db.delete(db_student)
    db.commit()
    return True 