import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [ btnName,setBtnName ] = useState("Login");
    const [searchText,setsearchText] = useState();
    
    const navigate = useNavigate();

    const handleLogin = () =>{
        if(btnName === "Login"){
            setBtnName("Logout");
            navigate("/login");
        }
        else{
            setBtnName("Login");
            navigate("/");
        }
    }
    return(
        <div className = "header">

            <div className = "logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }} 
                    />
                    <button>Search</button>
                </div>

            <div className="nav-items">
                <ul>
                    <li>
                       <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/pickUpScheduler">PickUp Scheduling</Link>
                    </li>
                    <li>
                        <Link to="/videoSharing">Video Sharing</Link>
                    </li>
                    
                    <button className="login" onClick={handleLogin}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;