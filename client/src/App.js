import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import HealthCheck from "./components/HealthCheck.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Signup from "./components/Signup.jsx";
import Feedback from "./components/Feedback.jsx";
import Advice from "./components/Advice.jsx";
import Prescription from "./components/Prescription.jsx";

// siam arefin

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/health-check" element={<HealthCheck /> } /> 
        <Route path="/feedback" element = {<Feedback />} />
        <Route path="/advice" element = {<Advice /> } />
        <Route path="/prescription" element = {<Prescription />} />
      </Routes>
      {location.pathname !== "/advice" && location.pathname !== "/Prescription"
      && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;