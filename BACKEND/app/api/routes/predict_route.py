from fastapi import APIRouter
from app.schemas.predict_schema import PredictRequest
from app.services.preprocess_service import preprocess_input
from app.services.predict_service import predict_price
from app.services.db_service import save_prediction

router = APIRouter()

@router.post("/predict")
def predict(data: PredictRequest):
    data_dict = data.dict()
    df = preprocess_input(data_dict)
    prix = predict_price(df)
    save_prediction(data_dict, prix)

    return {
        "prix_predit": prix
    }