from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.crud.crud_user import user
from app.schemas.user import UserCreate
from app.models.user import UserRole

def create_first_admin() -> None:
    db = SessionLocal()
    try:
        # Check if admin user already exists
        admin = user.get_by_username(db, username="admin")
        if admin:
            print("Admin user already exists")
            return

        # Create admin user
        admin_in = UserCreate(
            username="admin",
            email="admin@example.com",
            password="admin123",  # Change this to a secure password
            is_superuser=True,
            is_active=True,
            role=UserRole.ADMIN
        )
        user.create(db, obj_in=admin_in)
        print("Admin user created successfully")
    finally:
        db.close()

if __name__ == "__main__":
    create_first_admin() 