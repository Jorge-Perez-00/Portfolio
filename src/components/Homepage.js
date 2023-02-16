import { Component } from "react";
import '../css/Homepage.css'

import leftButtonImage from '../images/left-button.png'
import rightButtonImage from '../images/right-button.png'




const GAMES = ['aboutme', 'skills', 'links', 'tictactoe', 'maze', 'codeboy']



class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            animation: "right-slide-animation",
            colorButtons: "hide",
            color: "normal",
            GAME_ID: null,

            gameClicked: null,
            hideLargeGame: false,

            largeGameClosing: false,

            touchScreen: window.matchMedia("(pointer: coarse)").matches,

        }
    }

    updateGameDisplay = (event) => {
        let number = parseInt(event.target.id, 10)

        let newDisplay = this.state.display + number;
        if (newDisplay === -1) {
            newDisplay = 5;
        }
        else if (newDisplay === 6) {
            newDisplay = 0;
        }

        if(this.state.gameClicked === null && !this.state.largeGameClosing) {
            this.setState({
                display: newDisplay,
                animation: number === 1 ? "right-slide-animation" : "left-slide-animation",
            })
        }

    }

    handleColorButtons = (event) => {
        let type = event.target.id;

        if(type === "show") {
            this.setState({
                colorButtons: "show"
            })
        }

        else if(type === "hide") {
            this.setState({
                colorButtons: "hide"
            })
        }
    }

    setColor = (event) => {
        let COLOR = event.target.id;

        this.setState({
            color: COLOR,
        })
    }

    handleMouseEnter = (event) => {
        let gameID = parseInt(event.target.id, 10);

        //console.log("GAME HOVER ACTIVE !!!!")

        if(!isNaN(gameID)) {
            this.setState({
                GAME_ID: gameID,
            })
        }
    }

    handleMouseLeave = () => {
        this.setState({
            GAME_ID: null,
        })
    }

    handleGameClick = (event) => {
        let gameID = parseInt(event.target.id, 10);

        //console.log("GAME CLICK ACTIVE! ID: " + gameID);

        if(this.state.gameClicked === null && /*!this.state.largeGameClosing*/ !isNaN(gameID)) {
            this.setState({
                gameClicked: gameID,
                GAME_ID: null,
            })
        }

   
    }


    handleCloseButton = () => {
        //console.log("CLOSE !")
        this.setState({
            hideLargeGame: true,
            largeGameClosing: true,
        })
        
        this.timeout = setTimeout(() => {
            this.setState({
                gameClicked: null,
                hideLargeGame: false,
            })
        },1000)

        this.timeout2 = setTimeout(() => {
            //console.log("LARGE GAME FINISHED CLOSING!")
            this.setState({
                largeGameClosing: false,
            })
        },1500)
       

    }


    render() {

        const largeGame = GAMES[this.state.gameClicked];

        return (
            <div className={`main-container bg-${this.state.color}`}>



            
                <div className={`color-buttons-container ${this.state.colorButtons}`}>
                    <div id="normal" className="color-button color-normal" onClick={this.setColor}></div>
                    <div id="red" className="color-button color-red" onClick={this.setColor}></div>
                    <div id="orange" className="color-button color-orange" onClick={this.setColor}></div>
                    <div id="yellow" className="color-button color-yellow" onClick={this.setColor}></div>
                    <div id="skyblue" className="color-button color-skyblue" onClick={this.setColor}></div>
                    <div id="blue" className="color-button color-blue" onClick={this.setColor}></div>
                    <div id="purple" className="color-button color-purple" onClick={this.setColor}></div>
                    <div id="pink" className="color-button color-pink" onClick={this.setColor}></div>

                    <button id={"hide"} className="arrow-buttons colors-hide-button" onClick={this.handleColorButtons}>
                    </button>
                </div>
                
                {this.state.colorButtons === "hide" && 
                    <button id={"show"} className="arrow-buttons colors-show-button" onClick={this.handleColorButtons}>
                    </button> 
                }
                  
               

                {this.state.gameClicked !== null &&
                    <div className={`large-container  ${this.state.hideLargeGame && 'large-container-hide'}`}>
                        <div className="large-game-background">

                        </div>

                        <div className="large-game" >
                            <div className={`game-scene`}  >

                                <img className={`game-title large-title ${(largeGame === 'maze' || largeGame === 'tictactoe' || largeGame === 'codeboy') && 'project-title'}`} src={require(`../images/title-${largeGame}.png`)} alt="game title" />
                                <img className={`game-arrow large-arrow `} src={require(`../images/hide-button.png`)} alt="triangle" />

                                <div className='game-box large-game-box'>
                                    <div className="game-face large-game-front">
                                        <img loading="eager" className="game-image" src={require(`../images/${this.state.color}-game-${largeGame}.png`)} alt="Game" />
                                    </div>
                                    <div className="game-face large-game-back">
                                        <img loading="eager" src={require(`../images/${this.state.color}-game-back.png`)} alt="Game Back" />
                                    </div>
                                    <div className="game-face large-game-left">
                                        <img loading="eager" className="game-side-images" src={require(`../images/${this.state.color}-game-left.png`)} alt="Game Left" />
                                    </div>
                                    <div className="game-face large-game-right">
                                        <img loading="eager" className="game-side-images" src={require(`../images/${this.state.color}-game-right.png`)} alt="Game Right" />
                                    </div>
                                </div>
                            </div>

                            <button className="large-game-play-button" ></button>

                        </div>

                        <button onClick={this.handleCloseButton} className="large-game-close-button" ></button>
                        
                    </div>
                }




                <div className='container1'>
                    <div className='games-container'>
                        <button id={-1} className={`slideshowButtons left-button ${this.state.gameClicked !== null  && 'arrows-temporary-hide'} ${this.state.largeGameClosing && "left-arrow-remount-animation"} `} onClick={this.updateGameDisplay}>
                            <img id={-1} src={leftButtonImage} alt="left button" className='buttonImages' />
                        </button>
                        <button id={1} className={`slideshowButtons right-button ${this.state.gameClicked !== null  && 'arrows-temporary-hide'} ${this.state.largeGameClosing && "right-arrow-remount-animation"} `} onClick={this.updateGameDisplay}>
                            <img id={1} src={rightButtonImage} alt="right button" className='buttonImages' />
                        </button>

                        {GAMES.map((game,gameID) => 
                            <div key={this.state.color + gameID + 1} onClick={this.handleGameClick} className={`game game${gameID} ${this.state.display === gameID ? "active " + this.state.animation : ""} `}>
                                <div className={`game-scene ${this.state.gameClicked === gameID && 'hide-game'} ${this.state.largeGameClosing && 'temporary-top-animation'} `} onMouseEnter={!this.state.touchScreen ? this.handleMouseEnter : null} onMouseLeave={!this.state.touchScreen ? this.handleMouseLeave : null} >

                                    <img className={`game-title ${this.state.GAME_ID === gameID && 'game-title-active'} ${(game === 'maze' || game === 'tictactoe' || game === 'codeboy') && 'project-title'}`} src={require(`../images/title-${game}.png`)} alt="game title" />
                                    <img className={`game-arrow ${this.state.GAME_ID === gameID && 'game-arrow-active'}`} src={require(`../images/hide-button.png`)} alt="triangle" />

                                    <div id={gameID} className={`game-box ${this.state.GAME_ID === gameID && 'rotation-active'}`} > 
                                        <div className="game-face front">
                                            {<img id={gameID} loading='eager' className="game-image" src={require(`../images/${this.state.color}-game-${game}.png`)} alt="Game" />
                                                }
                                        </div>
                                        <div className="game-face back">
                                            <img id={gameID} className="game-back-image" src={require(`../images/${this.state.color}-game-back.png`)} alt="Game Back" />
                                        </div>
                                        <div className="game-face left">
                                            <img id={gameID} className="game-side-images" src={require(`../images/${this.state.color}-game-left.png`)} alt="Game Left" />
                                        </div>
                                        <div className="game-face right">
                                            <img id={gameID} className="game-side-images" src={require(`../images/${this.state.color}-game-right.png`)} alt="Game Right" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                        
                    </div>
                </div>

               


                <div className='container2'>
                    <div key={this.state.color} className='codeboy'>
                        <img key={''} className="codeboy-image" src={require(`../images/${this.state.color}-codeboy.png`)} alt="Codeboy" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;