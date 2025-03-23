from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional

from app.crud import student as student_crud
from app.schemas.student import Student, StudentCreate, StudentUpdate
from app.db.session import get_db

router = APIRouter()

@router.get("/", response_model=List[Student])
def read_students(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    search: Optional[str] = None,
    class_name: Optional[str] = None
):
    """
    Retrieve students with optional search and filtering.
    """
    students = student_crud.get_students(
        db, 
        skip=skip, 
        limit=limit,
        search=search,
        class_name=class_name
    )
    return students

@router.post("/", response_model=Student)
def create_student(
    student: StudentCreate,
    db: Session = Depends(get_db)
):
    """
    Create a new student.
    """
    db_student = student_crud.get_student_by_admission_number(db, admission_number=student.admission_number)
    if db_student:
        raise HTTPException(
            status_code=400,
            detail="Student with this admission number already exists"
        )
    return student_crud.create_student(db=db, student=student)

@router.get("/{student_id}", response_model=Student)
def read_student(
    student_id: int,
    db: Session = Depends(get_db)
):
    """
    Get a specific student by ID.
    """
    db_student = student_crud.get_student(db, student_id=student_id)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return db_student

@router.put("/{student_id}", response_model=Student)
def update_student(
    student_id: int,
    student: StudentUpdate,
    db: Session = Depends(get_db)
):
    """
    Update a student's information.
    """
    db_student = student_crud.update_student(db, student_id=student_id, student_update=student)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return db_student

@router.delete("/{student_id}")
def delete_student(
    student_id: int,
    db: Session = Depends(get_db)
):
    """
    Delete a student.
    """
    success = student_crud.delete_student(db, student_id=student_id)
    if not success:
        raise HTTPException(status_code=404, detail="Student not found")
    return {"message": "Student successfully deleted"} 