import { useEffect, useState } from "react";
import "./styles/Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [time, setTime] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    // Check login status from localStorage
    setIsLoggedIn(!!localStorage.getItem("isLoggedIn"));
  },[]);



  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  return (
    <header className="header">
      <div className="header-left">
        <span className="header-time">
          {hours}.{minutes} <span className="header-ampm">{ampm}</span>
        </span>
        <span className="header-weather">
          <span role="img" aria-label="weather">
            🌤️
          </span>
        </span>
        {/* <span className="header-menu">&#9776;</span> */}
      </div>
      <div className="header-center">
        <span className="header-logo" style={{ fontWeight: "bold", fontSize: "1.5rem" }}> </span>
        <span className="header-logo" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          <img src="/logo1.png" alt="logo" className="logoheader" style={{ height: "32px", verticalAlign: "middle" }} />
        </span>
        <span className="siteName">Health Monitor</span>
      </div>
      <div className="header-right">
        <Link to="/login" className="header-login">Login</Link>
        {/* <span className="header-settings" style={{ background: "#000", borderRadius: "50%", padding: "6px", margin: "0 8px", color: "#fff" }}>⚙️</span> */}
        <span className="header-mode">
          {/* <span role="img" aria-label="moon">🌙</span> */}
          <Link to="/signup" className="header-login">SignUp</Link>
        </span>
      </div>
    </header>
  );
}

export default Header;
