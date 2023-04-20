import Layout from "./Layout";


function Codeboy(props) {


    return (
        <Layout game={"codeboy"}>
            <h1>Codeboy</h1>
            <h4>2023</h4>

            <h2 className="subtitle-left" >Overview:</h2>
            <p>Codeboy is my coding portfolio website. The theme and name of this project was inspired by Nintendo’s Gameboy color and old school retro games. 
                Gameboy is a gaming device and Codeboy is a coding/programming device inspired by Gameboy. My Codeboy device showcases my background, education, 
                contact information, important links, programming skills, experience, and programming projects.</p>

            <div className="image-cards-container">
                <div className="image-card">
                    <img src={require(`../images/skyblue-game-aboutme.png`)} alt="javascript" className="image-card-image" />
                </div>
                <div className="image-card">
                    <img src={require(`../images/skyblue-game-skills.png`)} alt="javascript" className="image-card-image" />
                </div>
                <div className="image-card">
                    <img src={require(`../images/skyblue-game-links.png`)} alt="javascript" className="image-card-image" />
                </div>
                <div className="image-card">
                    <img src={require(`../images/skyblue-game-tictactoe.png`)} alt="javascript" className="image-card-image" />
                </div>
                <div className="image-card">
                    <img src={require(`../images/skyblue-game-maze.png`)} alt="javascript" className="image-card-image" />
                </div>
                <div className="image-card">
                    <img src={require(`../images/skyblue-game-codeboy.png`)} alt="javascript" className="image-card-image" />
                </div>
            </div>


            <h2 className="subtitle-left">Objective:</h2>
            <p>My goal was to build a unique retro style portfolio that is completely different from the layout and styles used in most coding portfolios. 
                I decided to develop this project by building all the components, features, and styling from scratch in order to challenge myself and to 
                continue learning frontend development. I also decided to teach myself how to create pixel art in order to build a fully authentic coding 
                portfolio with customized art that will give the user a fun and engaging experience. Overall my main focus was to create a fun, unique, 
                and engaging coding portfolio that will showcase both my creative skills and programming skills.</p>
        
            <h2 className="subtitle-left">Tools:</h2>
            <div className="image-cards-container">
                <div className="image-card">
                    <img src={require(`../images/javascript-art.png`)} alt="javascript" className="image-card-image pixel-art-images" />
                </div>
                <div className="image-card">
                    <img src={require(`../images/html-art.png`)} alt="html" className="image-card-image pixel-art-images" />
                </div>
                <div className="image-card">
                    <img src={require(`../images/css-art.png`)} alt="css" className="image-card-image pixel-art-images" />
                </div>
                <div className="image-card">
                    <img src={require(`../images/reactjs-art.png`)} alt="reactjs" className="image-card-image pixel-art-images" />
                </div>
            </div>

            <h2 className="subtitle-left">Github Repo:</h2>

            <div className="image-cards-container">
                <div className="image-card link-image-card">
                    <a href="https://github.com/Jorge-Perez-00/Portfolio" target="_blank" rel="noreferrer noopener" >
                        <img src={require(`../images/github-art.png`)} alt="github" className="image-card-image pixel-art-images" />
                    </a>
                </div>
            </div>
        
        </Layout>

    )


}

export default Codeboy;