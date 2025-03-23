from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.api import api_router

app = FastAPI(
    title="Special School Management System",
    description="API for managing special school students, teachers, and resources",
    version="1.0.0"
)

# Configure CORS
origins = [
    "http://localhost:3000",  # React frontend
    "http://localhost:5173",  # Vite frontend (if using Vite)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router
app.include_router(api_router)

@app.get("/")
async def root():
    return {
        "message": "Welcome to Special School Management System API",
        "docs": "/docs",  # Swagger UI
        "redoc": "/redoc"  # ReDoc UI
    } 