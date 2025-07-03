import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-btn-group">
        <a href="/" className="navbar-btn">
          Home
        </a>
        {/* <a href="/services" className="navbar-btn">
          Services
        </a> */}
        <a href="/health-check" className="navbar-btn">
          Health Check
        </a>
        <a href="/advice" className="navbar-btn">
          Advice
        </a>
        <a href="/Prescription" className="navbar-btn">
          Prescription
        </a>
        <a href="/feedback" className="navbar-btn">
          Feedback
        </a>
      </div>

      
    </nav>
  );
}

export default Navbar;
