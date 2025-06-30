import { useState } from "react";
import "./styles/Signup.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) setMessage("Logged in successfully!");
      else setMessage(data.error || "Login failed");
    } catch {
      setMessage("Server Error");
    }
  };


  return (
    <div className="signup-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: 12,
              top: 12,
            }}
            title={showPassword ? "Hide Password" : "Show Password"}
          >
            {showPassword ? (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M1 1l22 22M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7.5a11.05 11.05 0 0 1 5.17-5.92M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47" />
                <path d="M12 5c5 0 9.27 3.11 11 7.5a10.97 10.97 0 0 1-4.06 5.44" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <ellipse cx="12" cy="12" rx="10" ry="7.5" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </span>
        </div>
        <button type="submit">Log In</button>
      </form>
      
      
      
    </div>
  );
}

export default Login;
