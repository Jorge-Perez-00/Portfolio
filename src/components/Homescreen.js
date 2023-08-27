
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Resume from "./Resume";

import '../css/Homescreen.css'

function Homescreen() {

    const navigate = useNavigate();

    let [showResume, setShowResume] = useState(false);

    function handleStartButtonClick() {
        navigate("/home");
    }

    function handleSkipButtonClick() {
        navigate("/singlepage");
    }

   
    return (
        <div className="homescreen-container">
            
            <Resume showResume={showResume} onClick={() => { setShowResume(false) }} />
                
            <div className={`homescreen-title`}></div>
            
            <div className={`homescreen-buttons-container`}>
                <div className="homescreen-start-button" onClick={handleStartButtonClick}></div>
                <div className="links-container">
                    <a href="https://github.com/Jorge-Perez-00" target="_blank" rel="noreferrer noopener" >
                        <img draggable="false" src={require("../images/github-art-dark.png")} alt="github" className="links" title="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/jperez99/" target="_blank" rel="noreferrer noopener" >
                        <img draggable="false" src={require("../images/linkedin-art.png")} alt="linkedin" className="links" title="Linkedin" />
                    </a>

                    <img draggable="false" src={require("../images/resume-art.png")} alt="resume" className="links" title="Resume" onClick={() => { setShowResume(true) }} />

                    <img draggable="false" src={require("../images/skip-button-art.png")} alt="skip animation" className="links" title="Skip to view my info all in one page" onClick={handleSkipButtonClick} />

                </div>
            </div>
                        
            <div className='character'></div>

            <div className="main-layer-container" >
                <div className={`layers light-post-layer`} ></div>
                <div className={`layers main-layer`} ></div>
                <div className={`layers sky-layer`}></div>
                <div className={`layers buildings-layer`}></div>
            </div>
        

        </div>
    )
}

export default Homescreen;