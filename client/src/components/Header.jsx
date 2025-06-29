import React, { useEffect, useState } from "react";
import "./styles/Header.css";

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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
          <span role="img" aria-label="weather">🌤️</span>
        </span>
        <span className="header-menu">&#9776;</span>
      </div>
      <div className="header-center">
        <span className="header-logo" style={{ fontWeight: "bold", fontSize: "1.5rem" }}> </span>
        <span className="header-brand">Health Monitor</span>
      </div>
      <div className="header-right">
        <a href="#faqs" className="header-faqs">LogIn</a>
        {/* <span className="header-settings" style={{ background: "#000", borderRadius: "50%", padding: "6px", margin: "0 8px", color: "#fff" }}>⚙️</span> */}
        <span className="header-mode">
          {/* <span role="img" aria-label="moon">🌙</span> */}
          <a href="#contactus" className="header-contactus">SignUp</a>
        </span>
      </div>
    </header>
  );
}

export default Header;