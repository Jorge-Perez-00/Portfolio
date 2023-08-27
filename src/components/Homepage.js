import React, { Component } from "react";
import '../css/Homepage.css'
import { withRouter } from "./withRouter";

import Info from "./Info";
import Links from "./Links";

import ColorPicker from "./ColorPicker";
import Games from "./Games";
import LargeGame from "./LargeGame";
import InsertGame from "./InsertGame";


const GAMES = ['aboutme', 'skills', 'tictactoe', 'maze', 'codeboy']


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "skyblue",
            
            gameClicked: null,
            hideLargeGame: false,
            largeGameClosing: false,

            playGame: false,
            insertGame: false,

            devicePower: null,

            touchScreen: window.matchMedia("(pointer: coarse)").matches,

            gameMove: null,
            isLongPress: false,

            hideGameAfterDropInZone: false,

            disableAllFeatures: false,

            largeGameScreen: false,
            gameScreenX: null,
            gameScreenY: null,
            gameScreenWidth: null,
            gameScreenHeight: null,

            showLinks: false,
            showResume: false,
            showLargeGame: false,

        }
        this.gameScreenRef = React.createRef(null);
    }


    componentWillUnmount() {
        clearTimeout(this.timeout);
        clearTimeout(this.timeout2);
        clearTimeout(this.timeout3);
        clearTimeout(this.timeout4);
    }


    /*
        SET THE MAIN COLOR OF BOTH THE GAMES AND CODEBOY + THE GRADIENT COLOR OF THE BACKGROUND OF HOMEPAGE
    */
    setColor = (event) => {
        if(!this.state.disableAllFeatures) {
            let COLOR = event.target.id;
            this.setState({
                color: COLOR,
            })
        }
    }


    /*
         WHEN A GAME IS CLICKED A LARGER GAME WILL BE DISPLAYED
     */
    showLargeGame = (GAME_ID) => {

        this.setState({
            disableAllFeatures: true,
            showLargeGame: true,
            gameClicked: GAME_ID,
            ColorPicker: "hide"
        })
    }



    /*
        CLOSE BUTTON FUNCTION THAT HIDES/REMOVES THE LARGE GAME DISPLAY 
    */
    handleCloseButton = () => {
        this.setState({
            showLargeGame: false,
            gameClicked: null,
            largeGameClosing: true,
        })
        
        this.timeout = setTimeout(() => {
            this.setState({
                disableAllFeatures: false,
                largeGameClosing: false   
            })
        }, 500)
    }

    /*
        FUNCTION THAT HANDLES THE PLAY BUTTON INSIDE THE LARGE GAME CONTAINER.
        WHEN CLICKED MULTIPLE ANIMATIONS WILL PLAY AND THEN THE APPLICATION WILL NAVIGATE TO THE GAME PAGE
    */
    handlePlayButton = () => {
        this.setState({
            playGame: true,
        })

        this.timeout = setTimeout(() => {
            this.setState({
                showLargeGame: false,
                insertGame: true,
            })
        }, 2500)

        
        this.timeout2 = setTimeout(() => {
            this.setState({
                devicePower: "-power-on",
            })
        },6000)

        
        this.timeout3 = setTimeout(() => {
            this.gameTransition();
        },6500)
        
        
        this.timeout4 = setTimeout(() => {
            this.props.navigate(`/${GAMES[this.state.gameClicked]}`)
        },8600)
        
    }

    startGamePageTransition = () => {
        this.setState({
            hideGameAfterDropInZone: true,
            inDropZone: false,
            devicePower: "-power-on"
        })

        this.timeout = setTimeout(() => {
            this.gameTransition();
        }, 500);

        this.timeout2 = setTimeout(() => {
            this.props.navigate(`/${GAMES[this.state.gameMove]}`)
        }, 2600)
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

    DISABLE_ALL_FEATURES = (state) => {
        this.setState({
            disableAllFeatures: state,
        })
    }

    GAME_IS_MOVING = (state) => {
        this.setState({
            gameMove: state
        })
    }

    LONG_PRESS = (state) => {
        this.setState({
            isLongPress: state
        })
    }

    DROP_ZONE = (state) => {
        this.setState({
            inDropZone: state
        })
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
        //console.log("HOMEPAGE RENDER!");

        return (
            <div className={`main-container bg-${this.state.color}`}>

                <Info disable={this.state.disableAllFeatures}  hide={(this.state.playGame || (this.state.gameMove !== null && this.state.isLongPress))} />
                
                <Links disable={this.state.disableAllFeatures} hide={(this.state.playGame || (this.state.gameMove !== null && this.state.isLongPress))} />
                
                <div className={`single-page-button ${(this.state.playGame || (this.state.gameMove !== null && this.state.isLongPress)) && "disable-content"} `} onClick={this.handleSinglePageButtonClick} title="View everything in a single page"></div>
            
                <ColorPicker
                    //key={this.state.disableAllFeatures} 
                    disable={this.state.disableAllFeatures}
                    hide={(this.state.playGame || (this.state.gameMove !== null && this.state.isLongPress))}
                    setColor={this.setColor}
                />
                  
                {this.state.showLargeGame && 
                    <LargeGame
                        gameClicked={this.state.gameClicked}
                        color={this.state.color}
                        playGame={this.state.playGame}
                        handleCloseButton={this.handleCloseButton}
                        handlePlayButton={this.handlePlayButton}
                    />
                }

                <div draggable="false" className='container1' >
                    <Games 
                        color={this.state.color} 
                        disableAllFeatures={this.state.disableAllFeatures}
                        gameClicked={this.state.gameClicked}
                        playGame={this.state.playGame}
                        largeGameClosing={this.state.largeGameClosing}
                        showLargeGame={this.showLargeGame}
                        gameMove={this.state.gameMove}    
                        isLongPress={this.state.isLongPress}
                        hideGameAfterDropInZone={this.state.hideGameAfterDropInZone}
                        DISABLE_ALL_FEATURES={this.DISABLE_ALL_FEATURES}
                        GAME_IS_MOVING={this.GAME_IS_MOVING}
                        LONG_PRESS={this.LONG_PRESS}
                        DROP_ZONE={this.DROP_ZONE}
                        startGamePageTransition={this.startGamePageTransition}
                    />                         
                </div>

               
                <div 
                    style={this.state.largeGameScreen ? {position: 'fixed', left: `${this.state.gameScreenX}px`, top: `${this.state.gameScreenY}px`, width: `${this.state.gameScreenWidth}px`, height: `${this.state.gameScreenHeight}px`}  : null} 
                    className={`real-screen ${this.state.largeGameScreen ? 'zoom-into-gamescreen' : ""} `}  > 

                </div>


                <div className='container2'>

                    {this.state.insertGame && 
                        <InsertGame
                            color={this.state.color}    
                            gameClicked={this.state.gameClicked}
                        />
                    }

                    <div key={this.state.color} className={`codeboy ${this.state.inDropZone && 'highlight-drop-zone'}`}>
                        {this.state.inDropZone && 
                            <img className="drop-zone-arrow" src={require(`../images/show-button.png`)} alt="" />

                        }
                        <img draggable="false" className="codeboy-image" src={require(`../images/Codeboy/${this.state.color}-codeboy${this.state.devicePower !== null ? this.state.devicePower : ""}.png`)} alt="Codeboy" />
                        
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