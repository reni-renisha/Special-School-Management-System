from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.crud.crud_user import user

def check_admin_role():
    db = SessionLocal()
    try:
        # Get the admin user
        admin = user.get_by_username(db, username="admin")
        if admin:
            print(f"Admin user exists with role: {admin.role}")
            print(f"Role type: {type(admin.role)}")
            print(f"Is superuser: {admin.is_superuser}")
        else:
            print("Admin user does not exist")
    finally:
        db.close()

if __name__ == "__main__":
    check_admin_role() 