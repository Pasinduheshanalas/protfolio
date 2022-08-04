import React from "react";
import "./intro.css"
import Github from '../img/github.png'
import LinkedIn from '../img/linkedin.png'
import Instagram from '../img/instagram.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import Boy from '../img/boy.png'
import Thumbup from '../img/thumbup.png'
import Crown from '../img/crown.png'
import Galssesemoji from '../img/glasses.png'
import FloatingDiv from "./floatingDiv/floatingDiv";

function Intro(){
    return(
        <div className="container">
            <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy I Am</span>
                    <span> Pasindu Heshan</span>
                    <span> Front End Developer </span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <img src={Github} alt=""></img>
                    <img src={LinkedIn} alt=""></img>
                    <img src={Instagram} alt=""></img>
                </div>
            </div>
            <div className ="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <div style={{top:'1%', left:'58%'}}>
                <FloatingDiv image={Crown} txt1="Web" txt2="Development"/>
                </div>
                <div style={{top:'60%'}}>
                <FloatingDiv image={Crown} txt1="Best Design" txt2="Award"/>
                </div>

            </div>
        </div>
    </div>
    )
}
export default Intro;