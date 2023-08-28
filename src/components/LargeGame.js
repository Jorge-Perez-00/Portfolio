
import '../css/LargeGame.css'


const GAMES = ['aboutme', 'skills', /*'tictactoe',*/ 'maze', 'codeboy', 'pixelgames']

const PROJECTS = new Set(['maze', 'codeboy', 'pixelgames'])

function LargeGame(props) {

    const {gameClicked, color, playGame, handleCloseButton, handlePlayButton} = props;


    return (
        
        gameClicked !== null &&
            <div className={`large-container`}>
                <div className="large-game-background">

                </div>

                <div className={`large-game ${playGame && 'move-large-game-down'} `} >
                    <div className={`large-game-scene`}  >

                        <img className={`large-game-title ${playGame && 'hide-large-game-content'} ${PROJECTS.has(GAMES[gameClicked]) && 'large-project-title'}`} src={require(`../images/title-${GAMES[gameClicked]}.png`)} alt="game title" />
                        <img className={`large-game-arrow ${playGame && 'hide-large-game-content'} `} src={require(`../images/hide-button.png`)} alt="triangle" />

                        <div className={`large-game-box ${playGame && 'stop-large-game-animation'} `}>
                            <div className="large-game-face large-game-front">
                                <img className="large-game-images lg-game-front-image" src={require(`../images/Games/${color}-game-${GAMES[gameClicked]}.png`)} alt="Game" />
                            </div>
                            <div className="large-game-face large-game-back">
                                <img className="large-game-images lg-game-back-image" src={require(`../images/Games/${color}-game-back.png`)} alt="Game Back" />
                            </div>
                            <div className="large-game-face large-game-left">
                                <img className="large-game-images lg-game-side-image" src={require(`../images/Games/${color}-game-left.png`)} alt="Game Left" />
                            </div>
                            <div className="large-game-face large-game-right">
                                <img className="large-game-images lg-game-side-image" src={require(`../images/Games/${color}-game-right.png`)} alt="Game Right" />
                            </div>
                        </div>
                    </div>

                    {!playGame &&
                        <button onClick={handlePlayButton} className="large-game-play-button" ></button>
                    }

                </div>

                <button onClick={handleCloseButton} className={`large-game-close-button ${playGame && 'hide-large-game-content'} `} ></button>

            </div>
        
    )
}

export default LargeGame;