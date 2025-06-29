import React from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container">
        {/* Main content goes here */}
        <h1>Welcome to Health Monitor</h1>
        <p>Your health, our priority.</p>
      </div>
      <Footer />
      
    </div>
  )
}
export default App;
