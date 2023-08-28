
import Layout from "./Layout";

function PixelGames() {



    return (
        <Layout game={'pixelgames'} topFixedLayer={true}>
            <h1>PIXEL GAMES</h1>
            <h4>2023</h4>

            <h2 className="subtitle">Overview</h2>
            <p>Pixel Games is a fun gaming website where pixel art meets web browser gaming. You can play games like tic-tac-toe, blackjack, memory games, and many more. 
                All games were programmed and developed by me! The responsive design of the app makes it possible for users to play anywhere anytime on any device for free!</p>
            
            <div className="screenshots-container">
                <img src={require('../images/Screenshots/pixelgames-screenshot-1.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/Screenshots/pixelgames-screenshot-2.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/Screenshots/pixelgames-screenshot-3.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/Screenshots/pixelgames-screenshot-4.png')} alt="screenshot" className="screenshot-image" />
                <img src={require('../images/Screenshots/pixelgames-screenshot-5.png')} alt="screenshot" className="screenshot-image" />
            </div>

            <h2 className="subtitle">Objective</h2>
            <p>I developed this fun side project in order to teach myself how to program different types of games while improving my knowledge of Reactjs, frontend development, web browser gaming, cross browser compatibility, and css.
                To make the project feel unique and authentic I decided to create my own custom pixel art for every page/game of the project and the different sound effects for each game.
                I plan on adding many more games and fun features in the future.
            </p>

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

            <h2 className="subtitle">Demo</h2>

            <div className="image-cards-container">
                <div className="image-card link-image-card">
                    <a href="https://pixelgames.app/" target="_blank" rel="noreferrer noopener" >
                        <img src={require(`../images/demo-art.png`)} alt="demo" className="image-card-image pixel-art-images" />
                    </a>
                    <div className='mouse-pointer'></div>
                </div>
            </div>

        </Layout>
    
    )
}

export default PixelGames;