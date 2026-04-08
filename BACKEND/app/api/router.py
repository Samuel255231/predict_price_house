from fastapi import APIRouter
from app.api.routes.predict_route import router as predict_router
from app.api.routes.historique_route import router as historique_router

api_router = APIRouter()

api_router.include_router(predict_router, prefix="/api")
api_router.include_router(historique_router, prefix="/api")