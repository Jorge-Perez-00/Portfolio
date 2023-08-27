
import '../css/Resume.css'
import resumeImage from '../resume/resume-image.png'




function Resume(props) {

    const {showResume, onClick} = props;



    return(
        <>
            {showResume &&
                <div className="resume-container">
                    <div className="resume-background">
                    </div>

                    <div className="resume-close-button" onClick={onClick}>
                    </div>

                    <div className="resume-content">
                        <img src={resumeImage} alt="resume" className="resume" />
                        <a href={require("../resume/my-resume.pdf")} download="jorge-perez-resume" target="_blank" rel="noreferrer noopener" className="download-resume-button">DOWNLOAD</a>
                    </div>
                </div>
            }
        </>
    )
}


export default Resume;