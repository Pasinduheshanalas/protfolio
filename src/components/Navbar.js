import React from "react";
import "./Navbar.css"

function Navbar(){
    return(
    <div className="container">
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Heshan</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>ContactUs</li>
                    
                    </ul>
                   
                </div>
                <button className="button">ContactUs</button>
            </div>
        </div>
    </div>
    )
}
export default Navbar