
import { useState } from 'react'

import Resume from "./Resume";

import '../css/Links.css'


function Links(props) {

    const { disable, hide } = props;

    let [showLinks, setShowLinks] = useState(false);
    let [showResume, setShowResume]= useState(false);

    function handleMainButtonClick() {
        if(!disable) {
            setShowLinks(true);
        }
    }

    function handleResumeClick() {
        if(!disable) {
            setShowResume(true);
        }
    }


    return (
        <>
            <Resume showResume={showResume} onClick={() => { setShowResume(false) }} />

            {!showLinks &&
                <button 
                    className={`show-links-button ${disable && 'disable-link-button'}`} 
                    onClick={handleMainButtonClick}
                    style={hide === true ? { opacity: 0.4 } : null}
                ></button>
            }


            {showLinks &&
                <div className="homepage-links-content-container-small">
                    <div className="links-background">

                    </div>
                    <div className="homepage-links-container">
                        <a href="https://github.com/Jorge-Perez-00" target="_blank" rel="noreferrer noopener" >
                            <img draggable="false" src={require("../images/github-art-dark.png")} alt="github" className="homepage-links" title="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/jperez99/" target="_blank" rel="noreferrer noopener" >
                            <img draggable="false" src={require("../images/linkedin-art.png")} alt="linkedin" className="homepage-links" title="Linkedin" />
                        </a>

                        <img draggable="false" src={require("../images/resume-art.png")} alt="resume" className="homepage-links" title="Resume" onClick={handleResumeClick} />

                        <button className="close-links-button" onClick={() => {setShowLinks(false)}}></button>
                    </div>
                </div>
            }

            <div className={`homepage-links-container-large`} style={hide === true ? { opacity: 0.4 } : null}>
                <a href="https://github.com/Jorge-Perez-00" target="_blank" rel="noreferrer noopener" className={disable ? "disable-link-button" : ""} >
                    <img draggable="false" src={require("../images/github-art-dark.png")} alt="github" className="homepage-links-large" title="Github link" />
                </a>
                <a href="https://www.linkedin.com/in/jperez99/" target="_blank" rel="noreferrer noopener" className={disable ? "disable-link-button" : ""}>
                    <img draggable="false" src={require("../images/linkedin-art.png")} alt="linkedin" className="homepage-links-large" title="Linkedin link" />
                </a>

                <img draggable="false" src={require("../images/resume-art.png")} alt="resume" className="homepage-links-large" title="Resume" onClick={handleResumeClick} />
            </div>


        </>
    )
}

export default Links;