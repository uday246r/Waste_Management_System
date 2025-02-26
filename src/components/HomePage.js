import React from "react";
import { Link } from "react-router-dom";

const HomePage=()=>{
    return(
        <div>
        <div className="firstSection">
            <h1>Welcome to Waste Management Support System</h1>
            <p> Manage your waste pickups, explore creative waste reuse ideas, 
            and earn rewards for contributing to a cleaner planet.</p>

            <button className="homeSignUp"><Link to="/signup">Get Started</Link></button>
            <br/>
            <span id="alreadyMember">Already a Member ?</span>
            <br/>
            <button className="homeLogin"><Link to="/login"> Login</Link></button>
        </div>
        </div>
    );
};

export default HomePage;