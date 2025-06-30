import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Header.css";

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
  }, []);

  const handlLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

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
        <span
          className="header-logo"
          style={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          {" "}
        </span>
        <span
          className="header-logo"
          style={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          <img
            src="/logo1.png"
            alt="logo"
            className="logoheader"
            style={{ height: "32px", verticalAlign: "middle" }}
          />
        </span>
        <span className="siteName">Health Monitor</span>
      </div>
      <div className="header-right">
        {isLoggedIn ? (
          <div className="profile-menu">
            <img
              src="/logo1.png"
              alt="Profile"
              className="profile-logo"
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              title="Profile"
            />
            <button
              onClick={handlLogout}
              className="header-login"
              style={{ marginLeft: 10 }}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="header-login">
              Login
            </Link>
            <span className="header-mode">
              <Link to="/signup" className="header-login">
                SignUp
              </Link>
            </span>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
