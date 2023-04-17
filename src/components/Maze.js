import Layout from "./Layout";


function Maze(props) {


    return (
        <Layout game={"maze"}>
            <h1>Reinforcement Learning Maze</h1>
            <h4>2023</h4>

            <h2 className="subtitle-left" >Overview:</h2>
            <p>This is a web application mainly focused on mazes. In the application you are able to enter 4 different maze modes. 
                The main mode is a reinforcement learning maze mode where the user can view an animated visualization of how an agent 
                learns to find the best path in any 30x30 maze by using reinforcement learning in real time. In addition to the 
                reinforcement learning aspect the user can also watch how a 30x30 maze is randomly generated.</p>
            <p>
                The other 3 maze modes are all maze game modes. The first game mode is a single player game mode 
                where the user generates a random maze and races against time to find the exit of the maze to win. 
                The second game mode is an offline multiplayer game mode where 2 players can race against each other 
                and against time to see who will find the exit of the maze first. The third game mode is an online multiplayer 
                game mode where 2-4 different unique players can race against each other to find the exit of a randomly generated maze. </p>

            <div className="screenshots-container">
                <img src={require('../images/maze-screenshot-1.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/maze-screenshot-2.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/maze-screenshot-3.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/maze-screenshot-4.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/maze-screenshot-5.png')} alt="screenshot" className="screenshot-image" />
            </div>


            <h2 className="subtitle-left">Objective:</h2>
            <p>When I started to plan and build this project the initial goal was to convert my maze reinforcement learning project 
                from my capstone class into a web application with a UI because the project only executed through a terminal. 
                After completing my reinforcement learning tic-tac-toe project I decided to challenge myself even more by implementing a 
                gaming aspect to this maze project and a random maze generator component. My main focus was to improve my maze capstone 
                project while continuing to teach myself web development.</p>


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
                <div className="image-card">
                    <img src={require(`../images/firebase-art.png`)} alt="firebase" className="image-card-image pixel-art-images" />
                </div>
            </div>


            <h2 className="subtitle-left">Github Repo and Demo:</h2>

            <div className="image-cards-container">
                <div className="image-card link-image-card">
                    <a href="https://github.com/Jorge-Perez-00/Maze-App" target="_blank" rel="noreferrer noopener" >
                        <img src={require(`../images/github-art.png`)} alt="github" className="image-card-image pixel-art-images" />
                    </a>
                </div>

                <div className="image-card link-image-card">
                    <a href="https://jorge-perez-00.github.io/Maze-App/" target="_blank" rel="noreferrer noopener" >
                        <img src={require(`../images/demo-art.png`)} alt="demo" className="image-card-image pixel-art-images" />
                    </a>
                </div>
            </div>

        </Layout>

    )


}

export default Maze;