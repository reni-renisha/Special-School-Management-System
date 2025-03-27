from sqlalchemy.orm import Session
from typing import List, Optional
from app.models.teacher import Teacher
from app.schemas.teacher import TeacherCreate, TeacherUpdate
from app.crud.base import CRUDBase

def get_teacher(db: Session, teacher_id: int):
    return db.query(Teacher).filter(Teacher.id == teacher_id).first()

def get_teacher_by_aadhar(db: Session, aadhar_number: str):
    return db.query(Teacher).filter(Teacher.aadhar_number == aadhar_number).first()

def get_teacher_by_rci(db: Session, rci_number: str):
    return db.query(Teacher).filter(Teacher.rci_number == rci_number).first()

def get_teachers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Teacher).offset(skip).limit(limit).all()

def create_teacher(db: Session, teacher: TeacherCreate):
    db_teacher = Teacher(**teacher.model_dump())
    db.add(db_teacher)
    db.commit()
    db.refresh(db_teacher)
    return db_teacher

def update_teacher(db: Session, teacher_id: int, teacher: TeacherUpdate):
    db_teacher = get_teacher(db, teacher_id)
    if not db_teacher:
        return None
    
    update_data = teacher.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_teacher, field, value)
    
    db.commit()
    db.refresh(db_teacher)
    return db_teacher

def delete_teacher(db: Session, teacher_id: int):
    db_teacher = get_teacher(db, teacher_id)
    if not db_teacher:
        return False
    
    db.delete(db_teacher)
    db.commit()
    return True

# Create a CRUD object that matches the style of crud_user.py
class CRUDTeacher(CRUDBase[Teacher, TeacherCreate, TeacherUpdate]):
    def get_by_aadhar(self, db: Session, *, aadhar_number: str) -> Optional[Teacher]:
        return db.query(Teacher).filter(Teacher.aadhar_number == aadhar_number).first()
        
    def get_by_rci(self, db: Session, *, rci_number: str) -> Optional[Teacher]:
        return db.query(Teacher).filter(Teacher.rci_number == rci_number).first()
    
teacher = CRUDTeacher(Teacher) 