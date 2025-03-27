from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.crud.teacher import teacher
from app.schemas.teacher import Teacher, TeacherCreate, TeacherUpdate
from app.db.session import get_db

router = APIRouter()

@router.post("/", response_model=Teacher)
def create_teacher(teacher_in: TeacherCreate, db: Session = Depends(get_db)):
    # Check if teacher with same Aadhar exists
    db_teacher = teacher.get_by_aadhar(db, aadhar_number=teacher_in.aadhar_number)
    if db_teacher:
        raise HTTPException(status_code=400, detail="Teacher with this Aadhar number already exists")
    
    # Check if teacher with same RCI number exists
    db_teacher = teacher.get_by_rci(db, rci_number=teacher_in.rci_number)
    if db_teacher:
        raise HTTPException(status_code=400, detail="Teacher with this RCI number already exists")
    
    return teacher.create(db=db, obj_in=teacher_in)

@router.get("/", response_model=List[Teacher])
def read_teachers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    teachers = teacher.get_multi(db, skip=skip, limit=limit)
    return teachers

@router.get("/{teacher_id}", response_model=Teacher)
def read_teacher(teacher_id: int, db: Session = Depends(get_db)):
    db_teacher = teacher.get(db, id=teacher_id)
    if db_teacher is None:
        raise HTTPException(status_code=404, detail="Teacher not found")
    return db_teacher

@router.put("/{teacher_id}", response_model=Teacher)
def update_teacher(teacher_id: int, teacher_in: TeacherUpdate, db: Session = Depends(get_db)):
    db_teacher = teacher.get(db, id=teacher_id)
    if db_teacher is None:
        raise HTTPException(status_code=404, detail="Teacher not found")
    updated_teacher = teacher.update(db=db, db_obj=db_teacher, obj_in=teacher_in)
    return updated_teacher

@router.delete("/{teacher_id}")
def delete_teacher(teacher_id: int, db: Session = Depends(get_db)):
    db_teacher = teacher.get(db, id=teacher_id)
    if db_teacher is None:
        raise HTTPException(status_code=404, detail="Teacher not found")
    teacher.remove(db=db, id=teacher_id)
    return {"message": "Teacher deleted successfully"} 