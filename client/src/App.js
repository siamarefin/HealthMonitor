import React from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />


      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Body />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}
export default App;