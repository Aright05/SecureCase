from pathlib import Path
from typing import Generator
from sqlalchemy import create_engine, text
from sqlalchemy.orm import declarative_base, sessionmaker, Session

from app.core.config import settings

# Parse connection arguments based on database engine
connect_args = {}
if settings.DATABASE_URL.startswith("sqlite"):
    connect_args["check_same_thread"] = False
    
    # Ensure SQLite parent directory exists if using relative or absolute path
    db_path_str = settings.DATABASE_URL.replace("sqlite:///", "")
    if db_path_str and not db_path_str.startswith(":memory:"):
        db_file = Path(db_path_str).resolve()
        db_file.parent.mkdir(parents=True, exist_ok=True)

# Create database engine
engine = create_engine(
    settings.DATABASE_URL,
    connect_args=connect_args,
    echo=settings.DEBUG and settings.APP_ENV == "development",
)

# Session factory for database operations
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for SQLAlchemy ORM models
Base = declarative_base()


def get_db() -> Generator[Session, None, None]:
    """
    FastAPI dependency yielding a database session per request,
    ensuring proper closure after execution.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def check_db_connection() -> bool:
    """
    Lightweight health check verification for the database engine.
    """
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        return True
    except Exception:
        return False


def init_db() -> None:
    """
    Initialize database schemas and tables.
    Also ensures private document storage folder is created.
    """
    # Ensure storage folder exists
    storage_path = settings.resolved_storage_path
    storage_path.mkdir(parents=True, exist_ok=True)

    # Create tables defined on Base metadata
    Base.metadata.create_all(bind=engine)
