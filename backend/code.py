from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import joblib
import os

app = FastAPI()

model_path = os.path.join("..", "models", "XGBoostClassifier_model.pkl")
best_model = joblib.load(model_path)

class PredictRequest(BaseModel):
    ap_hi: float
    ap_lo: float
    cholesterol: float
    age_years: float
    bmi: float

@app.post("/predict")
async def predict_api(data: PredictRequest):
    input_data = data.dict()
    print("Received input data:", input_data)
    input_df = pd.DataFrame([input_data])
    try:
        prediction = best_model.predict(input_df)
        return {
            "input": input_data,
            "predicted_cardio": int(prediction[0]), 
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")