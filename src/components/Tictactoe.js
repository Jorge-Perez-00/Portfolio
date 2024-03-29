import Layout from "./Layout";


function Tictactoe(props) {


    return (
        <Layout game={"tictactoe"}>

            <h1>Reinforcement Learning <br /> Tic-Tac-Toe</h1>
            <h4>2022 - 2023</h4>
        
            <h2 className="subtitle" >Overview</h2>
            <p>This project is a tic-tac-toe game where you play against an agent that has played millions of tic-tac-toe games and learned the 
                best moves in each and every possible game of tic-tac-toe. The agent learns to play tic-tac-toe through a machine learning training method called reinforcement learning. 
                The agent you play against in this project has already been trained beforehand. In the game you are able to play as either the X player or the O player and you are able to face 3 different agents 
                with different difficulty levels. The difficulty levels are easy, medium, and impossible. In both the easy and medium levels the user has a good chance to win against the agent. In the impossible 
                level the agent will make the best moves 100% of the time that lead to winning games or games that lead to a draw making it impossible for the user to win against the agent.</p>

            <div className="screenshots-container">
                <img src={require('../images/Screenshots/ttt-screenshot-1.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/Screenshots/ttt-screenshot-2.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/Screenshots/ttt-screenshot-3.png')} alt="screenshot" className="screenshot-image" />
            </div>

            
            
            <h2 className="subtitle">Objective</h2>
            <p>This project was originally developed with C++ in my capstone class in college and only executed through a terminal. As a way to teach myself web development and building web applications 
                I decided to improve this project by building a much more exciting and engaging UI with React JS and making it accessible to many users online.</p>
            
            <h2 className="subtitle">Tools</h2>
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

            <h2 className="subtitle">Github Repo & Demo</h2>

            <div className="image-cards-container">
                <div className="image-card link-image-card">
                    <a href="https://github.com/Jorge-Perez-00/Tic-Tac-Toe" target="_blank" rel="noreferrer noopener" > 
                        <img src={require(`../images/github-art.png`)} alt="github" className="image-card-image pixel-art-images" />                  
                    </a>
                    <div className='mouse-pointer'></div>
                </div>

                <div className="image-card link-image-card">
                    <a href="https://jorge-perez-00.github.io/Tic-Tac-Toe/" target="_blank" rel="noreferrer noopener" >
                        <img src={require(`../images/demo-art.png`)} alt="demo" className="image-card-image pixel-art-images" />
                    </a>
                    <div className='mouse-pointer'></div>
                </div>
            </div>


        </Layout>

    )


}

export default Tictactoe;