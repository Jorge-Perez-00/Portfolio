import React, { Component } from "react";
import '../css/Homepage.css'
import { withRouter } from "./withRouter";

import Info from "./Info";
import Links from "./Links";


import leftButtonImage from '../images/left-button.png'
import rightButtonImage from '../images/right-button.png'


const GAMES = ['aboutme', 'skills', 'tictactoe', 'maze', 'codeboy']



class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            animation: "right-slide-animation",
            colorButtons: "hide",
            color: "skyblue",
            gameHover: null,

            gameClicked: null,
            hideLargeGame: false,

            largeGameClosing: false,


            playGame: false,
            hideLargeContainer: false,
            insertGame: false,

            devicePower: null,

            touchScreen: window.matchMedia("(pointer: coarse)").matches,

            gameIsMoving: null,
            isLongPress: false,
            mouseDown: false,

            gameLeft: null,
            gameTop: null,

            inDropZone: false,

            insertGameID: null,
            hideGameAfterDropInZone: false,


            disableAllFeatures: false,

            largeGameScreen: false,
            gameScreenX: null,
            gameScreenY: null,
            gameScreenWidth: null,
            gameScreenHeight: null,


            showLinks: false,
            showResume: false,
        }



        this.gamePositionX = 0;
        this.gamePositionY = 0;

        this.newGamePositionX = 0;
        this.newGamePositionY = 0;

        this.inDropZone = false;

        this.gameScreenRef = React.createRef(null);
    
    }

    /* 
        UPDATES WHICH GAME WILL BE DISPLAYED ON SMALLER WIDTH SCREENS (MOBILE DEVICES, TABLETS, SMALL WIDTH DESKTOPS AND LAPTOPS)
    */
    updateGameDisplay = (event) => {
        let number = parseInt(event.target.id, 10)

        let newDisplay = this.state.display + number;
        if (newDisplay === -1) {
            newDisplay = 4;
        }
        else if (newDisplay === 5) {
            newDisplay = 0;
        }

        if(this.state.gameClicked === null && !this.state.largeGameClosing) {
            this.setState({
                display: newDisplay,
                animation: number === 1 ? "right-slide-animation" : "left-slide-animation",
            })
        }

    }

    /*
        FUNCTION THAT HANDLES THE COLOR BUTTONS PICKER LIST
        SHOW: will display the the color buttons picker
        HIDE: will hide the colors button picker outside the viewport
    */
    handleColorButtons = (event) => {
        let type = event.target.id;

        if(!this.state.playGame && this.state.gameIsMoving === null) {
            if (type === "show") {
                this.setState({
                    colorButtons: "show"
                })
            }

            else if (type === "hide") {
                this.setState({
                    colorButtons: "hide"
                })
            }
        }
       
    }

    /*
        SET THE MAIN COLOR OF BOTH THE GAMES AND CODEBOY + THE GRADIENT COLOR OF THE BACKGROUND OF HOMEPAGE
    */
    setColor = (event) => {
        let COLOR = event.target.id;
        
        this.setState({
            color: COLOR,
        })
    }

    /*
        FUNCTION THAT WILL START THE 3D ROTATION ON A GAME WHEN THE USER'S MOUSE HOVERS THE GAME.
        THIS ONLY WORKS ON DEVICES THAT HAVE AN EXTERNAL MOUSE 
    */
    handleMouseEnter = (event) => {
        let gameID = parseInt(event.target.id, 10);

        if(!isNaN(gameID) && !this.state.disableAllFeatures) {
            this.setState({
                gameHover: gameID,
            })
        }
    }

    /*
        WHEN THE USER STOPS HOVERING THE GAME THE 3D ROTATION WILL STOP
    */
    handleMouseLeave = () => {
        this.setState({
            gameHover: null,
        })
    }

    /*
        WHEN A GAME IS CLICKED A LARGER GAME WILL BE DISPLAYED
    */
    handleGameClick = (event) => {
        let gameID = parseInt(event.target.id, 10);

        if(!isNaN(gameID) && !this.state.isLongPress && !this.state.disableAllFeatures) {
            this.setState({
                disableAllFeatures: true,
                gameClicked: gameID,
                insertGameID: gameID,
                gameHover: null,

            })
        }

   
    }

    /*
        CLOSE BUTTON FUNCTION THAT HIDES/REMOVES THE LARGE GAME DISPLAY 
    */
    handleCloseButton = () => {
        this.setState({
            hideLargeGame: true,
            largeGameClosing: true,
        })
        
        this.timeout = setTimeout(() => {
            this.setState({
                gameClicked: null,
                insertGameID: null,
                hideLargeGame: false,
                disableAllFeatures: false,
            })
        },1000)

        this.timeout2 = setTimeout(() => {
            //console.log("LARGE GAME FINISHED CLOSING!")
            this.setState({
                largeGameClosing: false,
            })
        },1500)
    
    }

    /*
        FUNCTION THAT HANDLES THE PLAY BUTTON INSIDE THE LARGE GAME CONTAINER.
        WHEN CLICKED MULTIPLE ANIMATIONS WILL PLAY AND THEN THE APPLICATION WILL NAVIGATE TO THE GAME PAGE
    */
    handlePlayButton = () => {
        this.setState({
            playGame: true,
            colorButtons: "hide",
        })

        this.timeout = setTimeout(() => {
            this.setState({
                hideLargeContainer: true,
                insertGame: true,
            })
        }, 3000)


        this.timeout2 = setTimeout(() => {
            this.setState({
                devicePower: "-power-on",
            })
        },6750)

        this.timeout3 = setTimeout(() => {
            this.gameTransition();
        },7500)

        this.timeout4 = setTimeout(() => {
            this.props.navigate(`/${GAMES[this.state.insertGameID]}`)
        },9600)
    }

   


    /*  FUNCTIONS THAT HANDLE DRAG AND DROP FUNCTIONALITY
        MOUSE MOVE + MOUSE DOWN + MOUSE UP

        THESE FUNCTIONS WORK WITH TOUCH SCREEN DEVICES (PHONES, TABLETS, ETC)
    */ 


    handleMouseMove = (event) => {

        if(this.state.touchScreen) {
            this.newGamePositionX = event.touches[0].pageX - this.gamePositionX;
            this.newGamePositionY = event.touches[0].pageY - this.gamePositionY;
        }
        else {
            this.newGamePositionX = event.pageX - this.gamePositionX;
            this.newGamePositionY = event.pageY - this.gamePositionY;
        }

        
        this.setState({
            gameLeft: this.newGamePositionX,
            gameTop: this.newGamePositionY,
        })
                

        let elementsBelow = null;

        if(this.state.touchScreen) {
            elementsBelow = document.elementsFromPoint(event.touches[0].clientX, event.touches[0].clientY);
        }
        else {
            elementsBelow = document.elementsFromPoint(event.clientX, event.clientY);

        }


        //console.log(elementsBelow);

        let closestElement = null;
        //console.log(elementsBelow);
        
        if(elementsBelow.length > 6) {
            if (elementsBelow.length !== 0) {
                closestElement = elementsBelow[6].className;
            }
        }
        /*
        else {
            console.log("NO CLASSNAME!")
        }
        */
    

        if(closestElement === 'codeboy-image') {
            //console.log("IN DROP ZONE !")
            this.setState({
                inDropZone: true,
            })

            this.inDropZone = true;
        }
        else {
            this.setState({
                inDropZone: false,
            })
            this.inDropZone = false;
        }
    }

    handleMouseDown = (event) => {        
        if(!this.state.disableAllFeatures) {
            const gameID = parseInt(event.target.id, 10);
            
            this.setState({
                disableAllFeatures: true,
                gameHover: null,
                gameIsMoving: gameID,
                insertGameID: gameID,
                isLongPress: false,
                colorButtons: "hide",
            })

            if(this.state.touchScreen) {
                //console.log("MOBILE")

                let middlePointOfGame = event.currentTarget.clientWidth / 2;
                
                let differenceX = (event.touches[0].clientX - event.currentTarget.getBoundingClientRect().left) - middlePointOfGame;
                let differenceY = (event.touches[0].clientY - event.currentTarget.getBoundingClientRect().top) - middlePointOfGame;


                this.gamePositionX = event.touches[0].clientX - differenceX;
                this.gamePositionY = event.touches[0].clientY - differenceY;
            }
            else {
                //console.log("DEVICE WITH MOUSE!")

                let middlePointOfGame = event.currentTarget.clientWidth / 2;

                let differenceX = (event.clientX - event.currentTarget.getBoundingClientRect().left) - middlePointOfGame;
                let differenceY = (event.clientY - event.currentTarget.getBoundingClientRect().top) - middlePointOfGame;
                

                this.gamePositionX = event.clientX - differenceX;
                this.gamePositionY = event.clientY - differenceY;

              
            }


            if(this.state.touchScreen) {
                window.addEventListener('touchmove', this.handleMouseMove);
                window.addEventListener('touchend', this.handleMouseUp);
            }
            else {
                window.addEventListener('mousemove', this.handleMouseMove);
                window.addEventListener('mouseup', this.handleMouseUp);
            }

            this.longPressTimeout = setTimeout(() => {
                this.setState({
                    isLongPress: true,
                })
            },200)

        }
    }


    handleMouseUp = () => {
        if(this.inDropZone) {
            this.setState({
                hideGameAfterDropInZone: true,
                inDropZone: false,
                //insertGame: true,
                devicePower: "-power-on"
            })

            this.timeout = setTimeout(() => {
                this.gameTransition();
            }, 500);

            this.timeout2 = setTimeout(() => {
                this.props.navigate(`/${GAMES[this.state.insertGameID]}`)
            }, 2600)
        }
        else {
            this.setState({
                disableAllFeatures: false,
                insertGameID: null,
                gameIsMoving: null,
                gameLeft: null,
                gameTop: null,
            });
        }

        clearTimeout(this.longPressTimeout);

        if(this.state.touchScreen) {
            window.removeEventListener('touchmove', this.handleMouseMove);
            window.removeEventListener('touchend', this.handleMouseUp);
        }
        else {
            window.removeEventListener('mousemove', this.handleMouseMove);
            window.removeEventListener('mouseup', this.handleMouseUp);
        }
    }

    /*
        PAGE TRASITION FUNCTION:
        MAKES AN EQUAL COPY OF A HIDDEN DIV HIDING BEHIND THE SCREEN OF THE CODEBOY.
        COPIES BOTH THE LEFT AND TOP POSITIONS + WIDTH AND HEIGHT OF THE HIDDEN DIV
        THE NEW PERFECT COPY DIV WILL GROW UNTIL IT IS THE SIZE OF THE VIEWPORT (ANIMATION)
        THEN THE APPLICATION WILL NAVIGATE TO THE GAME PAGE
    */
    gameTransition = () => {

        const gameScreenPositionX = this.gameScreenRef.current.getBoundingClientRect().left;
        const gameScreenPositionY = this.gameScreenRef.current.getBoundingClientRect().top;

        const screenWidth = this.gameScreenRef.current.clientWidth;
        const screenHeight = this.gameScreenRef.current.clientHeight;

        this.setState({
            largeGameScreen: true,
            gameScreenX: gameScreenPositionX,
            gameScreenY: gameScreenPositionY,
            gameScreenWidth: screenWidth,
            gameScreenHeight: screenHeight,
        })
    }

    handleChildElementMouseDown = (event) => {
        event.stopPropagation();
    }

    /*
        NAVIGATES TO THE SINGLE PAGE COMPONENT WHERE ALL MY INFORMATION IS COMBINED IN ONE SINGLE PAGE
    */
    handleSinglePageButtonClick = () => {
        if(!this.state.disableAllFeatures) {
            this.props.navigate('/singlepage')
        }
    }

    render() {

        const largeGame = GAMES[this.state.gameClicked];

        const insertGameName = GAMES[this.state.insertGameID];

        return (
            <div className={`main-container bg-${this.state.color}`}>

                <Info disable={this.state.disableAllFeatures} hide={(this.state.playGame || (this.state.gameIsMoving !== null && this.state.isLongPress))} />
                
                <Links disable={this.state.disableAllFeatures} hide={(this.state.playGame || (this.state.gameIsMoving !== null && this.state.isLongPress))} />
                
                <div className={`single-page-button ${(this.state.playGame || (this.state.gameIsMoving !== null && this.state.isLongPress)) && "disable-content"} `} onClick={this.handleSinglePageButtonClick} title="View everything in a single page"></div>
            
                <div className={`color-buttons-container ${this.state.colorButtons}`}>
                    <div id="normal" className="color-button color-normal" onClick={this.setColor}></div>
                    <div id="red" className="color-button color-red" onClick={this.setColor}></div>
                    <div id="orange" className="color-button color-orange" onClick={this.setColor}></div>
                    <div id="yellow" className="color-button color-yellow" onClick={this.setColor}></div>
                    <div id="skyblue" className="color-button color-skyblue" onClick={this.setColor}></div>
                    <div id="blue" className="color-button color-blue" onClick={this.setColor}></div>
                    <div id="purple" className="color-button color-purple" onClick={this.setColor}></div>
                    <div id="pink" className="color-button color-pink" onClick={this.setColor}></div>

                    <button id={"hide"} className={`arrow-buttons colors-hide-button ${(this.state.playGame || (this.state.gameIsMoving !== null && this.state.isLongPress)) && "disable-content"} ` } onClick={this.handleColorButtons}>
                    </button>
                </div>
                
                {this.state.colorButtons === "hide" && 
                    <button id={"show"} className={`arrow-buttons colors-show-button ${(this.state.playGame || (this.state.gameIsMoving !== null && this.state.isLongPress)) && "disable-content"} `} onClick={this.handleColorButtons}>
                    </button> 
                }
                  
               

                {this.state.gameClicked !== null &&
                    <div className={`large-container  ${this.state.hideLargeGame && 'large-container-hide'} ${this.state.hideLargeContainer && 'force-large-container-hide'}`}>
                        <div className="large-game-background">

                        </div>

                        <div className={`large-game ${this.state.playGame && 'move-large-game-down'} `} >
                            <div className={`game-scene`}  >

                                <img className={`game-title large-title ${this.state.playGame && 'hide-large-game-content'} ${(largeGame === 'maze' || largeGame === 'tictactoe' || largeGame === 'codeboy') && 'project-title'}`} src={require(`../images/title-${largeGame}.png`)} alt="game title" />
                                <img className={`game-arrow large-arrow ${this.state.playGame && 'hide-large-game-content'} `} src={require(`../images/hide-button.png`)} alt="triangle" />

                                <div id={this.state.playGame.toString()} className={`game-box large-game-box ${this.state.playGame && 'stop-large-game-animation'} `}>
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

                            {!this.state.playGame && 
                                <button onClick={this.handlePlayButton} className="large-game-play-button" ></button>
                            }

                        </div>

                        <button onClick={this.handleCloseButton} className={`large-game-close-button ${this.state.playGame && 'hide-large-game-content'} `} ></button>
                        
                    </div>
                }




                <div draggable="false" className='container1' >
                    <div draggable='false' className='games-container'>
                        <button id={-1} className={`slideshowButtons left-button ${(this.state.gameClicked !== null || this.state.gameIsMoving !== null)  && 'arrows-temporary-hide'} ${this.state.largeGameClosing && "left-arrow-remount-animation"} `} onClick={this.updateGameDisplay}>
                            <img id={-1} src={leftButtonImage} alt="left button" className='buttonImages' />
                        </button>
                        <button id={1} className={`slideshowButtons right-button ${(this.state.gameClicked !== null || this.state.gameIsMoving !== null)  && 'arrows-temporary-hide'} ${this.state.largeGameClosing && "right-arrow-remount-animation"} `} onClick={this.updateGameDisplay}>
                            <img id={1} src={rightButtonImage} alt="right button" className='buttonImages' />
                        </button>

                        {GAMES.map((game,gameID) => 
                            <div draggable="false" key={this.state.color + gameID + 1} 
                                style={(this.state.playGame || (this.state.gameIsMoving !== null && this.state.gameIsMoving !== gameID && this.state.isLongPress)) ? {zIndex: 0, opacity: 0.4} : null }  
                                className={`game game${gameID} ${this.state.display === gameID ? "active " + this.state.animation : ""} `} 
                                >
                                <div 
                                    id={gameID}  
                                    style={this.state.gameIsMoving === gameID ? { left: `${this.state.gameLeft}px`, top: `${this.state.gameTop}px`} : null } 
                                    className={`game-scene ${(this.state.gameClicked === gameID || (this.state.gameIsMoving === gameID && this.state.hideGameAfterDropInZone) ) && 'hide-game'} ${this.state.largeGameClosing && 'temporary-top-animation'}`} 
                                    onMouseDown={!this.state.touchScreen ? this.handleMouseDown : null}
                                    onTouchStart={this.handleMouseDown} 
                                    onMouseEnter={!this.state.touchScreen ? this.handleMouseEnter : null} 
                                    onMouseLeave={!this.state.touchScreen ? this.handleMouseLeave : null}
                                    draggable="false">

                                    <img 
                                        className={`game-title ${this.state.gameHover === gameID && 'game-title-active'} ${this.state.gameIsMoving !== null && "hide-game-content"} ${(game === 'maze' || game === 'tictactoe' || game === 'codeboy') && 'project-title'}`} 
                                        src={require(`../images/title-${game}.png`)} alt="game title"
                                        draggable='false'
                                        onMouseDown={this.handleChildElementMouseDown}
                                        onTouchStart={this.handleChildElementMouseDown}
                                        />
                                    <img 
                                        className={`game-arrow ${this.state.gameHover === gameID && 'game-arrow-active'} ${this.state.gameIsMoving !== null && "hide-game-content"} `} 
                                        src={require(`../images/hide-button.png`)} alt="triangle"
                                        draggable='false'
                                        onMouseDown={this.handleChildElementMouseDown}
                                        onTouchStart={this.handleChildElementMouseDown}
                                        />

                                    <div draggable="false" id={gameID} className={`game-box ${this.state.gameHover === gameID && 'rotation-active'} ${this.state.gameIsMoving !== null && 'stop-rotation'}`} onClick={this.handleGameClick} > 
                                        <div draggable='false' className="game-face front" >
                                            <img draggable='false' id={gameID}  loading='eager' className="game-image" src={require(`../images/${this.state.color}-game-${game}.png`)} alt="Game"  />
                                        </div>
                                        <div draggable='false' className="game-face back" >
                                            <img draggable='false' id={gameID} className="game-back-image" src={require(`../images/${this.state.color}-game-back.png`)} alt="Game Back" />
                                        </div>
                                        <div draggable='false' className="game-face left" >
                                            <img draggable='false' id={gameID} className="game-side-images" src={require(`../images/${this.state.color}-game-left.png`)} alt="Game Left" />
                                        </div>
                                        <div draggable='false' className="game-face right" >
                                            <img draggable='false' id={gameID} className="game-side-images" src={require(`../images/${this.state.color}-game-right.png`)} alt="Game Right" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                        
                    </div>
                </div>

               
                <div 
                    style={this.state.largeGameScreen ? {position: 'fixed', left: `${this.state.gameScreenX}px`, top: `${this.state.gameScreenY}px`, width: `${this.state.gameScreenWidth}px`, height: `${this.state.gameScreenHeight}px`}  : null} 
                    className={`real-screen ${this.state.largeGameScreen ? 'zoom-into-gamescreen' : ""} `}  > 

                </div>


                <div className='container2'>

                    {this.state.insertGame && 
                        <div className="insert-game" >
                            <div className={`game-scene insert-game-scene `}>
                                <div className={`game-box insert-game-box`} >
                                    <div className="game-face front">
                                        <img loading='eager' className="game-image" src={require(`../images/${this.state.color}-game-${insertGameName}.png`)} alt="Game" />
                                    </div>
                                    <div className="game-face back">
                                        <img className="game-back-image" src={require(`../images/${this.state.color}-game-back.png`)} alt="Game Back" />
                                    </div>
                                    <div className="game-face left">
                                        <img className="game-side-images" src={require(`../images/${this.state.color}-game-left.png`)} alt="Game Left" />
                                    </div>
                                    <div className="game-face right">
                                        <img className="game-side-images" src={require(`../images/${this.state.color}-game-right.png`)} alt="Game Right" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                    


                    <div key={this.state.color} className={`codeboy ${this.state.inDropZone && 'highlight-drop-zone'}`}>
                        {this.state.inDropZone && 
                            <img className="drop-zone-arrow" src={require(`../images/show-button.png`)} alt="" />

                        }
                        <img draggable="false" className="codeboy-image" src={require(`../images/${this.state.color}-codeboy${this.state.devicePower !== null ? this.state.devicePower : ""}.png`)} alt="Codeboy" />
                        
                        <div
                            ref={this.gameScreenRef}
                            className="fake-screen">
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Homepage);