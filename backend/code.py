import pandas as pd
import os
import sys 
import json 
import joblib

model_path = os.path.join("models/XGBoostClassifier_model.pkl");

def predict(input_data):
    input_df = pd.DataFrame([input_data])
    required_columns = ["ap_hi", "ap_lo", "cholesterol", "age_years", "bmi"]
    for col in required_columns:
        if col not in input_df.columns:
            return {"error": f"Missing required field: {col}"}
    
    try:
        prediction = best_model.predict(input_df)
        return{
            "input": input_df,
            "predicted_cardio": int(prediction[0]);
        }
    except Exception as e:
        return {"error": f"Prediciton error:{str(e)}"}
    


if __name__ == "__main__":
    input_json = sys.stdin.read()
    input_data = json.loads(input_json)
    result = predict(input_data)
    