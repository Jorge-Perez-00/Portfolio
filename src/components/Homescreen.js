
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Resume from "./Resume";

import '../css/Homescreen.css'



function Homescreen(props) {

    const navigate = useNavigate();

    let [startClicked, setStartClicked] = useState(false);

    let [showResume, setShowResume] = useState(false);
    let [showContent, setShowContent] = useState(false);

    
    useEffect(() => {
        setTimeout(() => {
            setShowContent(true);
        }, 2750)
    });


    function handleStartButtonClick() {

        /*  FIRST ANIMATION: MOVE CHARACTER TO THE CENTER OF THE SCREEN (HORIZONTAL ANIMATION) 
            ANIMATION LENGTH: 3 SECONDS
        */
        //setStartClicked(true);

        navigate("/home")
  
    }

    function handleSkipButtonClick() {
        navigate("/singlepage");
    }


    return (
        <div className="homescreen-container">

            {!showContent && 
                
                <div className="character-only-container">
                    <div className="character-only"></div>
                </div>
            }
            

            <Resume showResume={showResume} onClick={() => { setShowResume(false) }} />
                
            <div className={`homescreen-title ${startClicked ? 'hide-homescreen-title' : null} `}>

            </div>
            
            <div className={`homescreen-buttons-container ${startClicked ? 'hide-buttons-container' : null} `}>
                <div className="homescreen-start-button" onClick={handleStartButtonClick}></div>
                <div className="links-container">
                    <a href="https://github.com/Jorge-Perez-00" target="_blank" rel="noreferrer noopener" >
                        <img src={require("../images/github-art-dark.png")} alt="github" className="links" title="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/jperez99/" target="_blank" rel="noreferrer noopener" >
                        <img src={require("../images/linkedin-art.png")} alt="linkedin" className="links" title="Linkedin" />
                    </a>

                    <img src={require("../images/resume-art.png")} alt="resume" className="links" title="Resume" onClick={() => { setShowResume(true) }} />

                    <img src={require("../images/skip-button-art.png")} alt="skip animation" className="links" title="Skip to view my info all in one page" onClick={handleSkipButtonClick} />

                </div>
            </div>
            

            <div className='character'>

            </div>

            <div className="main-layer-container" >
                <div className={`layers light-post-layer ${startClicked ? 'stop-infinite-scrolling' : null}  `} >

                </div>
                <div className={`layers main-layer ${startClicked ? 'stop-infinite-scrolling' : null} `} >

                </div>
                <div className={`layers sky-layer ${startClicked ? 'stop-infinite-scrolling' : null} `}>

                </div>

                <div className={`layers buildings-layer ${startClicked ? 'stop-infinite-scrolling' : null}`}>

                </div>
            </div>     

           

        </div>
    )
}

export default Homescreen;