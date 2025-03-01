import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      
      <div className="firstSection">
        <h1>Welcome to Waste Management Support System</h1>
        <p>
          Manage your waste pickups, explore creative reuse ideas, and earn rewards 
          for contributing to a cleaner planet.
        </p>

        <div className="auth-buttons">
          <Link to="/signUp" className="homeSignUp">Get Started</Link>
          <Link to="/login" className="homeLogin">Already a member?</Link>
        </div>
      </div>
     
    </div>
  );
};

export default HomePage;
