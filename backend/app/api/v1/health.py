from fastapi import APIRouter
from app.core.config import settings
from app.core.database import check_db_connection
from app.schemas.health import HealthResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse, tags=["System Health"])
def get_health() -> HealthResponse:
    """
    Returns basic application and database connectivity health status.
    No authentication required.
    """
    db_connected = check_db_connection()
    return HealthResponse(
        status="healthy" if db_connected else "degraded",
        service=settings.APP_NAME,
        version=settings.APP_VERSION,
        environment=settings.APP_ENV,
        database="connected" if db_connected else "disconnected",
    )
