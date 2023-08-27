
import '../css/InsertGame.css'

const GAMES = ['aboutme', 'skills', 'tictactoe', 'maze', 'codeboy']

function InsertGame(props) {

    const {color, gameClicked} = props;

    return (
        <div className="insert-game" >
            <div className={`insert-game-scene`}>
                <div className={`insert-game-box`} >
                    <div className="insert-game-face insert-game-front">
                        <img className={'insert-game-images'} src={require(`../images/Games/${color}-game-${GAMES[gameClicked]}.png`)} alt="Game" />
                    </div>
                    <div className="insert-game-face insert-game-back">
                        <img className={'insert-game-images'} src={require(`../images/Games/${color}-game-back.png`)} alt="Game Back" />
                    </div>
                    <div className="insert-game-face insert-game-left">
                        <img className={'insert-game-images insert-game-side-image'} src={require(`../images/Games/${color}-game-left.png`)} alt="Game Left" />
                    </div>
                    <div className="insert-game-face insert-game-right">
                        <img className={'insert-game-images insert-game-side-image'} src={require(`../images/Games/${color}-game-right.png`)} alt="Game Right" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InsertGame;