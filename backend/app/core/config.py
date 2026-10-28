from pathlib import Path
from typing import List, Union
from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
    Application configuration settings loaded from environment variables or .env file.
    Default values support zero-dependency local development with SQLite.
    """
    APP_NAME: str = "SecureCase"
    APP_VERSION: str = "0.1.0"
    APP_ENV: str = "development"
    DEBUG: bool = True
    API_V1_PREFIX: str = "/api"
    HOST: str = "127.0.0.1"
    PORT: int = 8000

    # Cross-Origin Resource Sharing (CORS) allowed origins
    CORS_ORIGINS: Union[List[str], str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]

    # Database configuration (defaults to local SQLite file)
    DATABASE_URL: str = "sqlite:///./storage/securecase.db"

    # Private Evidence and Document Storage Configuration
    # Local path outside public web server root
    STORAGE_DIR: str = "../storage/documents"
    MAX_UPLOAD_SIZE_MB: int = 25

    # Security configuration
    SECRET_KEY: str = "securecase-dev-placeholder-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> List[str]:
        if isinstance(v, str):
            if v.startswith("[") and v.endswith("]"):
                import json
                try:
                    return json.loads(v)
                except Exception:
                    pass
            return [i.strip() for i in v.split(",") if i.strip()]
        return v

    @property
    def resolved_storage_path(self) -> Path:
        """Returns the resolved absolute Path to the private storage directory."""
        return Path(self.STORAGE_DIR).resolve()


settings = Settings()
