from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.crud.crud_user import user
from app.models.user import UserRole

def update_admin_role():
    db = SessionLocal()
    try:
        # Get the admin user
        admin = user.get_by_username(db, username="admin")
        if admin:
            print(f"Found admin user with current role: {admin.role}")
            
            # Update the role to admin
            admin.role = UserRole.ADMIN
            db.commit()
            
            # Verify the change
            db.refresh(admin)
            print(f"Updated admin user role to: {admin.role}")
        else:
            print("Admin user does not exist")
    finally:
        db.close()

if __name__ == "__main__":
    update_admin_role() 