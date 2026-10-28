from pydantic import BaseModel
from typing import Optional


class HealthResponse(BaseModel):
    status: str
    service: str
    version: str
    environment: str
    database: Optional[str] = None
