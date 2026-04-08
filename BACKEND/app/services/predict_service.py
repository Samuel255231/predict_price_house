import joblib

model = joblib.load("models/catboost_model.pkl")

def predict_price(df):
    prediction = model.predict(df)[0]
    return float(prediction)