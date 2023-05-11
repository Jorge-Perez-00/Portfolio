import Layout from "./Layout";


function Skills(props) {


    return (
        <Layout game={"skills"} topFixedLayer={true}>

            <h1>SKILLS & TOOLS</h1>

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
            
        </Layout>

    )


}

export default Skills;