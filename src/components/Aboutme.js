
import Layout from "./Layout";


function Aboutme(props) {


    return(
        <Layout game={"aboutme"}>

            <h1>ABOUT ME</h1>

            <div className="cards-container">
                <div className="card">
                    <img src={require(`../images/pixelated-me.png`)} alt="my pixelated character" className="card-image pixel-art-images" />
                    <div className="card-text-container">
                        <h3 className="card-title">Me</h3>
                        <p className="card-text">My name is Jorge Perez and I am 23 years old </p>
                    </div>
                </div>

                <div className="card">
                    <img src={require(`../images/pixelated-nyc.png`)} alt="NYC" className="card-image pixel-art-images" />
                    <div className="card-text-container">
                        <h3 className="card-title">Background</h3>
                        <p className="card-text">I'm a Mexican-American programmer from New York City</p>
                    </div>
                </div>

                <div className="card">
                    <img src={require(`../images/pixelated-hunter-logo.png`)} alt="Hunter College" className="card-image pixel-art-images" />
                    <div className="card-text-container">
                        <h3 className="card-title">CUNY Hunter College</h3>
                        <p className="card-text">I attended CUNY Hunter College between 2017-2022</p>
                    </div>
                </div>

                <div className="card">
                    <img src={require(`../images/computer-scientist-art.png`)} alt="Computer Science" className="card-image pixel-art-images" />
                    <div className="card-text-container">
                        <h3 className="card-title">Computer Scientist</h3>
                        <p className="card-text">I graduated from Hunter College with a Bachelor's of Arts degree in Computer Science</p>
                    </div>
                </div>

                
            </div>

            <div>
                <h2 className="subtitle">Jorge Perez</h2>
                <p>Hello World! My name is Jorge Perez. I am a 23 year old computer programmer from New York City. I graduated from Hunter College 
                    in 2022 with a bachelor's degree of Arts in Computer Science. In my spare time I develop and build projects while challenging 
                    myself to learn new programming skills and new programming techniques. I enjoy combining my creativity skills and programming 
                    skills to build unique and exciting projects that will give users a fun and engaging experience. Other things I really enjoy 
                    doing outside of programming are producing music, learning a new art skill, and working out. In the future I aspire to become a 
                    software engineer or frontend developer where I can challenge myself and continue to grow as a programmer.</p> 
            </div>

            <h2 className="subtitle">Github & Linkedin</h2>

            <div className="image-cards-container">
                <div className="image-card link-image-card">
                    <a href="https://github.com/Jorge-Perez-00" target="_blank" rel="noreferrer noopener" >
                        <img src={require(`../images/github-art-dark.png`)} alt="github" className="image-card-image pixel-art-images" />
                    </a>
                    <div className='mouse-pointer'></div>
                </div>

                <div className="image-card link-image-card">
                    <a href="https://www.linkedin.com/in/jperez99/" target="_blank" rel="noreferrer noopener" >
                        <img src={require(`../images/linkedin-art.png`)} alt="linkedin" className="image-card-image pixel-art-images" />
                    </a>
                    <div className='mouse-pointer'></div>
                </div>
            </div>

            <h2 className="subtitle">Resume</h2>

            <img src={require(`../resume/resume-image.png`)} alt="resume" className="resume-image" />
            <a href={require("../resume/my-resume.pdf")} download="jorge-perez-resume" target="_blank" rel="noreferrer noopener" className="download-button">DOWNLOAD</a>


           
        </Layout>
       
    )


}

export default Aboutme;