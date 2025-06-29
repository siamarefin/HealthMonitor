import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-btn-group">
        <a href="/services" className="navbar-btn">
          Services
        </a>
        <a href="/health-check" className="navbar-btn">
          Health Check
        </a>
        <a href="/advice" className="navbar-btn">
          Advice
        </a>
        <a href="/medicine" className="navbar-btn">
          Medicine
        </a>
        <a href="/medicine" className="navbar-btn">
          Contact Us
        </a>
      </div>

      
    </nav>
  );
}

export default Navbar;
