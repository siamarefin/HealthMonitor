import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import HealthCheck from "./components/HealthCheck.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Signup from "./components/Signup.jsx";
import Contactus from "./components/Feedback.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/health-check" element={<HealthCheck /> } /> 
        <Route path="/Feedback" element = {<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;