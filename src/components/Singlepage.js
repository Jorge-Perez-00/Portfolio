
import '../css/Layout.css'
import '../css/Singlepage.css'

import homepageButton_OFF from '../images/homepage-button-off.png'
import homepageButton_ON from '../images/homepage-button-on.png'
import headerMainButton from '../images/header-button.png'

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Singlepage(props) {

    const navigate = useNavigate();
    const [homepageButtonImage, setHomepageButtonImage] = useState(homepageButton_OFF);
    const [showHeaderButtons, setShowHeaderButtons] = useState(false);

    const headerRef = useRef(null);
    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const linksRef = useRef(null);
    const resumeRef = useRef(null);


    function handleHomepageButtonHover() {
        setHomepageButtonImage(homepageButton_ON);
    }

    function handleHomepageButtonLeave() {
        setHomepageButtonImage(homepageButton_OFF);

    }

    function handleHomepageButtonClick() {
        navigate('/home')
    }

    

    function scrollToAboutMe() {
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });

    }



    function handleHeaderButton(event) {
        const CLASSNAME = event.target.className;
        const ID = event.target.id;


        if(CLASSNAME === 'header-list-button') {
            setShowHeaderButtons(false);
        }

        if(ID === 'aboutme') {
            aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if(ID === 'skills') {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if(ID === 'projects') {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if(ID === 'links') {
            linksRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if(ID === 'resume') {
            resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }


    function scrollToTop() {
        headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
       <div className='singlepage-main-container'>
        
            {showHeaderButtons && 
                <div className='header-button-list-container'>
                    <div className='header-list-close-button' onClick={() => { setShowHeaderButtons(false) }}></div>

                    <div className='header-button-list'>
                        <button id='aboutme' className='header-list-button' onClick={handleHeaderButton}>ABOUT ME</button>
                        <button id='skills' className='header-list-button' onClick={handleHeaderButton}>SKILLS</button>
                        <button id='projects' className='header-list-button' onClick={handleHeaderButton}>PROJECTS</button>
                        <button id='links' className='header-list-button' onClick={handleHeaderButton}>LINKS</button>
                        <button id='resume' className='header-list-button' onClick={handleHeaderButton}>RESUME</button>
                    </div>
                </div>
            }
          

            <header ref={headerRef} className='singlepage-header'>
                <img src={homepageButtonImage} alt="homepage button" className='homepage-button' onClick={handleHomepageButtonClick} onMouseEnter={handleHomepageButtonHover} onMouseLeave={handleHomepageButtonLeave} />
                

                <img src={headerMainButton} alt="header button" className='header-main-button' onClick={() => {setShowHeaderButtons(true)}}/>

               

                <div className='singlepage-sections-container'>
                    <button id='aboutme' className='header-button' onClick={handleHeaderButton}>ABOUT ME</button>
                    <button id='skills' className='header-button' onClick={handleHeaderButton}>SKILLS</button>   
                    <button id='projects' className='header-button' onClick={handleHeaderButton}>PROJECTS</button>
                    <button id='links' className='header-button' onClick={handleHeaderButton}>LINKS</button>  
                    <button id='resume' className='header-button' onClick={handleHeaderButton}>RESUME</button>             
                </div>

            </header>

            <div className='singlepage-art-container'>

                <div className={`main-art-layers layer-1 skills-art`}> </div>

                <div className='codeboy-layer'>
                    <div className='screen-div'>
                        <div className='screen-div-art'>

                        </div>
                    </div>

                </div>

                <div className='page-arrow-down' onClick={scrollToAboutMe}>

                </div>
            </div>



            <div ref={aboutMeRef} className='single-containers single-aboutme-container'>
                <h1 className='subtitle'>ABOUT ME</h1>

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
            </div>


            <div ref={skillsRef} className='single-containers single-skills-container'>
                <h1 className='subtitle'>SKILLS & TOOLS</h1>

                <div className="image-cards-container">
                    <div className="image-card">
                        <div className="image-card-face">
                            <div className="image-card-front">
                                <img src={require(`../images/javascript-art.png`)} alt="javascript" className="image-card-image pixel-art-images" />
                                <div className='mouse-pointer'></div>
                            </div>
                            <div className="image-card-back">
                                <h3 className="image-card-title" >Javascript</h3>
                                <p className="image-card-text">Javascript is the first language that introduced me to programming in high school. I started to seriously learn Javascript in my final year of college for frontend development.</p>
                            </div>

                        </div>
                    </div>

                    <div className="image-card">
                        <div className="image-card-face">
                            <div className="image-card-front">
                                <img src={require(`../images/html-art.png`)} alt="html" className="image-card-image pixel-art-images" />
                                <div className='mouse-pointer'></div>
                            </div>
                            <div className="image-card-back">
                                <h3 className="image-card-title" >HTML</h3>
                                <p className="image-card-text">I began learning HTML in my intro to web development class. I gained an interest in frontend development from learning HTML.</p>
                            </div>

                        </div>
                    </div>

                    <div className="image-card">
                        <div className="image-card-face">
                            <div className="image-card-front">
                                <img src={require(`../images/css-art.png`)} alt="css" className="image-card-image pixel-art-images" />
                                <div className='mouse-pointer'></div>
                            </div>
                            <div className="image-card-back">
                                <h3 className="image-card-title" >CSS</h3>
                                <p className="image-card-text">I started to learn CSS when I started to get comfortable with building basic websites and to this day I continue to challenge myself and learn even more about CSS styling and techniques.</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-card">
                        <div className="image-card-face">
                            <div className="image-card-front">
                                <img src={require(`../images/reactjs-art.png`)} alt="reactjs" className="image-card-image pixel-art-images" />
                                <div className='mouse-pointer'></div>
                            </div>
                            <div className="image-card-back">
                                <h3 className="image-card-title" >React JS</h3>
                                <p className="image-card-text">React JS is currently my main frontend development tool. I started using React right after I got comfortable with HTML and Javascript. All of my projects showcased in my portfolio were all developed using React.</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-card">
                        <div className="image-card-face">
                            <div className="image-card-front">
                                <img src={require(`../images/c++-art.png`)} alt="c++" className="image-card-image pixel-art-images" />
                                <div className='mouse-pointer'></div>
                            </div>
                            <div className="image-card-back">
                                <h3 className="image-card-title" >C++</h3>
                                <p className="image-card-text">C++ is the programming language that introduced me to all the basic fundamentals of programming like classes and functions. C++ was the programming language used in 90% of computer science classes at Hunter College. </p>
                            </div>
                        </div>
                    </div>
                    <div className="image-card">
                        <div className="image-card-face">
                            <div className="image-card-front">
                                <img src={require(`../images/python-art.png`)} alt="python" className="image-card-image pixel-art-images" />
                                <div className='mouse-pointer'></div>
                            </div>
                            <div className="image-card-back">
                                <h3 className="image-card-title" >Python</h3>
                                <p className="image-card-text">Python was the first programming language I used in college and the language that further helped grow my interest in computer science.</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-card">
                        <div className="image-card-face">
                            <div className="image-card-front">
                                <img src={require(`../images/firebase-art.png`)} alt="firebase" className="image-card-image pixel-art-images" />
                                <div className='mouse-pointer'></div>
                            </div>
                            <div className="image-card-back">
                                <h3 className="image-card-title" >Firebase</h3>
                                <p className="image-card-text">I used Firebase to implement a simple 4 player online multiplayer maze game mode in my maze reinforcement learning project.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={projectsRef} className='single-containers single-projects-container'>
                <h1 className='subtitle'>PROJECTS</h1>

                <div className="cards-container project-cards-container">
                    <div className="card project-cards">
                        <img src={require(`../images/skyblue-game-tictactoe.png`)} alt="my pixelated character" className="card-image pixel-art-images project-images" />
                        <div className="card-text-container">
                            <h3 className="card-title">Tic-Tac-Toe</h3>
                            <p className="card-text project-text">Simple tic-tac-toe game where you play against an agent that was trained with reinforcement learning. </p>
                        </div>
                    </div>

                    <div className="card project-cards">
                        <img src={require(`../images/skyblue-game-maze.png`)} alt="NYC" className="card-image pixel-art-images project-images" />
                        <div className="card-text-container">
                            <h3 className="card-title">Maze</h3>
                            <p className="card-text project-text">Maze application where you can train an agent to solve any 30x30 maze with reinforcement learning, play 1 player and 2 player offline games, and play a 4 player online multiplayer game.</p>
                        </div>
                    </div>

                    <div className="card project-cards">
                        <img src={require(`../images/skyblue-game-codeboy.png`)} alt="Hunter College" className="card-image pixel-art-images project-images" />
                        <div className="card-text-container">
                            <h3 className="card-title">Codeboy</h3>
                            <p className="card-text project-text">My coding portfolio built with a lot of love. The portfolio was built with reactjs and it contains many animations and custom art implemented and created from scratch by me.</p>
                        </div>
                    </div>

                </div>


            </div>

            <div ref={linksRef} className='single-containers single-links-container'>
                <h1 className='subtitle'>MY LINKS</h1>
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

                <h1 ref={resumeRef} className='subtitle'>RESUME</h1>
                <img src={require(`../resume/resume-image.png`)} alt="resume" className="resume-image" />
                <a href={require("../resume/my-resume.pdf")} download="jorge-perez-resume" target="_blank" className="download-button">DOWNLOAD</a>

            </div>

            <div className='move-up-content'>
                <div className='page-arrow-up'>

                </div>
                <button className='move-up-button' onClick={scrollToTop}>
                    SCROLL TO TOP
                </button>
            </div>
       </div>
    )
}


export default Singlepage;