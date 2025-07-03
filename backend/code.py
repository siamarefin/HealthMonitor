from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import joblib
import os
from langchain.chat_models import init_chat_model
from dotenv import load_dotenv

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
    




# Load environment variables
load_dotenv()

# Set up Gemini API key from .env
os.environ["GOOGLE_API_KEY"] = os.getenv("GEMINI_API_KEY", "")

# Set up Gemini chat model (no tools)
model = init_chat_model("gemini-2.0-flash", model_provider="google_genai")

class ChatRequest(BaseModel):
    message: str

@app.post("/advice")
async def chat_endpoint(request: ChatRequest):
    try:
        user_message = request.message.strip()
        prompt = f" Suppose you are my doctor , i will tell my problem or about disease you just advice me , use several para, bold , headline to answer,   : {user_message}"
        response = model.invoke([{"role": "user", "content": prompt}])
        response_text = response.text()
        print(f"💬 gemini: {response_text}")
        return {"response": response_text}
    except Exception as e:
        print(f"❌ Server error: {e}")
        return {"error": str(e)}