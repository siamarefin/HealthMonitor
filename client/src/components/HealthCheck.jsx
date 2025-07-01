import axios from "axios";
import { useState } from "react";
import "./styles/HealthCheck.css";

const HealthCheck = () => {
  const [form, setForm] = useState({
    ap_hi: "",
    ap_lo: "",
    cholesterol: "",
    age_years: "",
    bmi: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult("");
    setResult(null);
    try {
      console.log("try");
      const response = await axios.post("/api/predict", {
        ap_hi: parseFloat(form.ap_hi),
        ap_lo: parseFloat(form.ap_lo),
        cholesterol: parseFloat(form.cholesterol),
        age_years: parseFloat(form.age_years),
        bmi: parseFloat(form.bmi),
      });
      setResult(response.data);
    } catch (err) {
      setError("Prediction failed. Please check your input.");
    }
  };
  return (
    <div className="health-check-container">
      <h2>Health Check Prediction</h2>
      <form className="health-check-form" onSubmit={handleSubmit}>
        <div>
          <label>Systolic BP (ap_hi): </label>
          <input
            type="number"
            name="ap_hi"
            value={form.ap_hi}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Diastolic BP (ap_lo): </label>
          <input
            type="number"
            name="ap_lo"
            value={form.ap_lo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cholesterol: </label>
          <input
            type="number"
            name="cholesterol"
            value={form.cholesterol}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age (years): </label>
          <input
            type="number"
            name="age_years"
            value={form.age_years}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>BMI: </label>
          <input
            type="number"
            name="bmi"
            value={form.bmi}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Predict</button>
      </form>
      {result && (
        <div className="prediction-result">
          <h3>Prediction Result</h3>
          {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
          <div style={{ marginTop: "1em", fontWeight: "bold" }}>
            {result.predicted_cardio === 0
              ? "Congratulations, you have no Cardio diseases."
              : "Sorry, you may have a risk of Cardio disease."}
          </div>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default HealthCheck;
