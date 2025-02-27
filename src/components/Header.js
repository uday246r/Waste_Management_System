import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        if (btnName === "Login") {
            setBtnName("SignUp");
            navigate("/login");
        } else {
            setBtnName("Login");
            navigate("/signUp");
        }
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/pickUpScheduler">PickUp Scheduling</Link></li>
                    <li><Link to="/videoSharing">Video Sharing</Link></li>
                </ul>
            </div>

            <div className="search">
                <input 
                    type="text" 
                    className="search-box" 
                    placeholder="Search..." 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)} 
                />
                <button className="search-btn">Search</button>
            </div>

            <button className="login-btn" onClick={handleLogin}>{btnName}</button>
        </header>
    );
};

export default Header;
