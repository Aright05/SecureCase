from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.database import init_db
from app.api.v1.router import api_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Application startup: verify database connection and ensure private storage exists
    init_db()
    yield
    # Application shutdown cleanup (if any)


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="SecureCase — AI-Powered Secure Digital Document & Evidence Management System API",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# Configure Cross-Origin Resource Sharing (CORS) for local frontend interaction
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes under the configured prefix (/api)
app.include_router(api_router, prefix=settings.API_V1_PREFIX)


@app.get("/", tags=["Root"])
def root_status():
    """
    Root status check with API discovery links.
    """
    return {
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "status": "operational",
        "documentation": "/docs",
        "health_check": f"{settings.API_V1_PREFIX}/health",
    }
