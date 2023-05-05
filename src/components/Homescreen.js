
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Resume from "./Resume";

import '../css/Homescreen.css'



function Homescreen(props) {

    const navigate = useNavigate();


    const {onStart} = props;

    let [startClicked, setStartClicked] = useState(false);

    let [characterCentered, setCharacterCentered] = useState(false);

    let [showResume, setShowResume] = useState(false);

    

    function handleStartButtonClick() {

        /*  FIRST ANIMATION: MOVE CHARACTER TO THE CENTER OF THE SCREEN (HORIZONTAL ANIMATION) 
            ANIMATION LENGTH: 3 SECONDS
        */
        setStartClicked(true);

        /* SECOND ANIMATION: MOVE CHARACTER TO THE MIDDLE OF THE SCREEN (VERTICAL ANIMATION) 
            ANIMATION LENGTH: 2 SECONDS        
        */
        let timeout = setTimeout(() => {
            setCharacterCentered(true);
        }, 3000)

        /* NAVIGATE TO HOMEPAGE */
        let timeout2 = setTimeout(() => {
            navigate("/home");

        }, 5900)
        

        /*
        let timeout2 = setTimeout(() => {
            console.log('Timeout 2');
            onStart();
        }, 5700)

        let timeout3 = setTimeout(() => {
            console.log('Timeout 3');
            navigate("/home");
        },6400)
        */
    }

    function handleSkipButtonClick() {
        navigate("/home");
    }


    return (
        <div className="container">


            <Resume showResume={showResume} onClick={() => {setShowResume(false)}} />
            
           
            <div className={`homescreen-title ${startClicked ? 'hide-homescreen-title' : null} `}>

            </div>

            <div className={`homescreen-buttons-container ${startClicked ? 'hide-buttons-container' : null} `}>
                <div className="homescreen-start-button" onClick={handleStartButtonClick}></div>
                <div className="links-container">
                    <a href="https://github.com/Jorge-Perez-00" target="_blank" rel="noreferrer noopener" >
                        <img src={require("../images/github-art-dark.png")} alt="github" className="links" title="Github link"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jperez99/" target="_blank" rel="noreferrer noopener" >
                        <img src={require("../images/linkedin-art.png")} alt="linkedin" className="links" title="Linkedin link"/>
                    </a>

                    <img src={require("../images/resume-art.png")} alt="resume" className="links" title="Resume" onClick={() => {setShowResume(true)}} />

                    <img src={require("../images/skip-button-art.png")} alt="skip animation" className="links" title="Skip homescreen animation" onClick={handleSkipButtonClick}/>

                </div>
            </div>
            

            <div className={`character ${startClicked ? 'character-animation-transition' : ""} ${characterCentered ? 'character-centered' : null} `}>

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