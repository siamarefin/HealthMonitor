import axios from "axios";
import { useState } from "react";
import "./styles/Feedback.css";

const Feedback = () => {
  const [form, setForm] = useState({ email: "", feedback: "", age: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    try {
      await axios.post("/api/feedback", {
        email: form.email,
        feedback: form.feedback,
        age: form.age,
      });
      console.log("userEmail:", form.email);
      setSuccess("Thank you for your feedback!");
      setForm({ email: "", feedback: "", age: "" });
    } catch (err) {
      setError("Failed to submit feedback. Please try again.");
      console.log(err.response?.data || err.message);
    }
  };
  return (
    <div className="contactus-container">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Your Feedback or Question:</label>
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Your Age:</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {success && <div style={{ color: "green" }}>{success}</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Feedback;
