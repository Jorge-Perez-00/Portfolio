

import { useEffect, useRef, useState } from 'react'
import '../css/Games.css'

import leftButtonImage from '../images/left-button.png'
import rightButtonImage from '../images/right-button.png'


const GAMES = ['aboutme', 'skills', /*'tictactoe',*/ 'maze', 'codeboy', 'pixelgames']

const PROJECTS = new Set(['maze', 'codeboy', 'pixelgames'])


function Games(props) {
    //console.log("GAMES RENDER !");

    const { color, disableAllFeatures, gameClicked, playGame, largeGameClosing, showLargeGame, gameMove, isLongPress, hideGameAfterDropInZone, DISABLE_ALL_FEATURES, GAME_IS_MOVING, LONG_PRESS, DROP_ZONE, startGamePageTransition} = props;

    const [displayGame, setDisplayGame] = useState(0);

    const [animation, setAnimation] = useState("right-slide-animation");
    const [gameHover, setGameHover] = useState(null);

    const [gameLeft, setGameLeft] = useState(null);
    const [gameTop, setGameTop] = useState(null);

    const longPressTimeout = useRef(null);
    const gamePositionX = useRef(0);
    const gamePositionY = useRef(0);
    const inDropZone = useRef(false);


    const [touchScreen] = useState(window.matchMedia("(pointer: coarse)").matches);


    useEffect(() => {
        return () => {
            clearTimeout(longPressTimeout.current);
        }
    }, [])

    /* 
        UPDATES WHICH GAME WILL BE DISPLAYED ON SMALLER WIDTH SCREENS (MOBILE DEVICES, TABLETS, SMALL WIDTH DESKTOPS AND LAPTOPS)
    */
    function updateGameDisplay(event) {
        let number = parseInt(event.target.id, 10)

        let newDisplay = displayGame + number;
        if (newDisplay === -1) {
            newDisplay = 4;
        }
        else if (newDisplay === 5) {
            newDisplay = 0;
        }

        if (gameClicked === null && !largeGameClosing) {
            setDisplayGame(newDisplay);
            setAnimation(number === 1 ? "right-slide-animation" : "left-slide-animation")
        }

    }

    /*
    FUNCTION THAT WILL START THE 3D ROTATION ON A GAME WHEN THE USER'S MOUSE HOVERS THE GAME.
    THIS ONLY WORKS ON DEVICES THAT HAVE AN EXTERNAL MOUSE 
    */
    function handleMouseEnter(event) {
        let gameID = parseInt(event.target.id, 10);

        if (!isNaN(gameID) && !disableAllFeatures) {
            setGameHover(gameID);
        }
    }

    /*
        WHEN THE USER STOPS HOVERING THE GAME THE 3D ROTATION WILL STOP
    */
    function handleMouseLeave() {
        if(gameMove === null) {
            setGameHover(null);
        }
    }


    /*
          WHEN A GAME IS CLICKED A LARGER GAME WILL BE DISPLAYED
    */
    function handleGameClick(event) {
        let gameID = parseInt(event.target.id, 10);

        if (!isNaN(gameID) && !isLongPress && !disableAllFeatures) {
            setGameHover(null);
            showLargeGame(gameID);
        }
    }


    /*  
        FUNCTIONS THAT HANDLE DRAG AND DROP FUNCTIONALITY
        MOUSE MOVE + MOUSE DOWN + MOUSE UP

        THESE FUNCTIONS WORK WITH TOUCH SCREEN DEVICES (PHONES, TABLETS, ETC)
    */ 
    function handleMouseMove(event) {

        let newGamePositionX;
        let newGamePositionY;

        if (touchScreen) {
            newGamePositionX = event.touches[0].pageX - gamePositionX.current;
            newGamePositionY = event.touches[0].pageY - gamePositionY.current;
        }
        else {
            newGamePositionX = event.pageX - gamePositionX.current;
            newGamePositionY = event.pageY - gamePositionY.current;
        }

        setGameLeft(newGamePositionX);
        setGameTop(newGamePositionY);

        let elementsBelow = null;

        if (touchScreen) {
            elementsBelow = document.elementsFromPoint(event.touches[0].clientX, event.touches[0].clientY);
        }
        else {
            elementsBelow = document.elementsFromPoint(event.clientX, event.clientY);
        }

        let closestElement = null;

        if (elementsBelow.length > 6) {
            if (elementsBelow.length !== 0) {
                closestElement = elementsBelow[6].className;
            }
        }

        //ON DROP ZONE
        if (closestElement === 'codeboy-image') {
            if(!inDropZone.current) {
                DROP_ZONE(true);
                inDropZone.current = true;
            }
        }
        //NOT ON DROP ZONE
        else {
            if(inDropZone.current) {
                DROP_ZONE(false);
                inDropZone.current = false;
            }
        }

    }

    function handleMouseUp() {

        if(inDropZone.current) {
            startGamePageTransition();
        }
        else {
            setGameLeft(null);
            setGameTop(null);
            DISABLE_ALL_FEATURES(false)
            GAME_IS_MOVING(null);
        }

        clearTimeout(longPressTimeout.current);

        if (touchScreen) {
            window.removeEventListener('touchmove', handleMouseMove);
            window.removeEventListener('touchend', handleMouseUp);
        }
        else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }

    function handleMouseDown(event) {
        if (!disableAllFeatures) {
            const gameID = parseInt(event.target.id, 10);

            DISABLE_ALL_FEATURES(true);
            GAME_IS_MOVING(gameID);
            LONG_PRESS(false);

            setGameHover(null);

            if (touchScreen) {
                //console.log("MOBILE")
                let middlePointOfGame = event.currentTarget.clientWidth / 2;

                let differenceX = (event.touches[0].clientX - event.currentTarget.getBoundingClientRect().left) - middlePointOfGame;
                let differenceY = (event.touches[0].clientY - event.currentTarget.getBoundingClientRect().top) - middlePointOfGame;

                gamePositionX.current = event.touches[0].clientX - differenceX;
                gamePositionY.current = event.touches[0].clientY - differenceY;
            }
            else {
                //console.log("DEVICE WITH MOUSE!")
                let middlePointOfGame = event.currentTarget.clientWidth / 2;

                let differenceX = (event.clientX - event.currentTarget.getBoundingClientRect().left) - middlePointOfGame;
                let differenceY = (event.clientY - event.currentTarget.getBoundingClientRect().top) - middlePointOfGame;

                gamePositionX.current = event.clientX - differenceX;
                gamePositionY.current = event.clientY - differenceY;
            }

            if (touchScreen) {
                window.addEventListener('touchmove', handleMouseMove);
                window.addEventListener('touchend', handleMouseUp);
            }
            else {
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
            }

            longPressTimeout.current = setTimeout(() => {
                LONG_PRESS(true);
            }, 200)

        }
    }

    function handleChildElementMouseDown(event) {
        event.stopPropagation();
    }


    return (
        <div className='games-container'>

            <button id={-1} className={`slideshowButtons left-button ${(gameClicked !== null || gameMove !== null) && 'arrows-temporary-hide'} ${largeGameClosing && "left-arrow-remount-animation"} `} onClick={updateGameDisplay}>
                <img id={-1} src={leftButtonImage} alt="left button" className='buttonImages' />
            </button>
            <button id={1} className={`slideshowButtons right-button ${(gameClicked !== null || gameMove !== null) && 'arrows-temporary-hide'} ${largeGameClosing && "right-arrow-remount-animation"} `} onClick={updateGameDisplay}>
                <img id={1} src={rightButtonImage} alt="right button" className='buttonImages' />
            </button>

            {GAMES.map((game, gameID) =>
                <div  
                    key={color + gameID + 1}
                    style={(playGame || (gameMove !== null && gameMove !== gameID && isLongPress)) ? { zIndex: 0, opacity: 0.4 } : null}
                    className={`game game${gameID} ${displayGame === gameID ? "active " + animation : ""} `}
                >
                    <div
                        id={gameID}
                        style={{left: gameMove === gameID ? `${gameLeft}px` : '0', top: gameMove === gameID ? `${gameTop}px` : '0' }}
                        className={`game-scene ${(gameClicked === gameID || (gameMove === gameID && hideGameAfterDropInZone)) && 'hide-game'} ${largeGameClosing && 'temporary-top-animation'}`}
                        onMouseDown={!touchScreen ? handleMouseDown : null}
                        onTouchStart={handleMouseDown}
                        onMouseEnter={!touchScreen ? handleMouseEnter : null}
                        onMouseLeave={!touchScreen ? handleMouseLeave : null}
                        >


                        <img
                            className={`game-title ${gameHover === gameID && 'game-title-active'} ${gameMove !== null && "hide-game-content"} ${PROJECTS.has(game) && 'project-title'}`}
                            src={require(`../images/title-${game}.png`)} alt="game title"
                            draggable='false'
                            onMouseDown={handleChildElementMouseDown}
                            onTouchStart={handleChildElementMouseDown}
                        />
                        <img
                            className={`game-arrow ${gameHover === gameID && 'game-arrow-active'} ${gameMove !== null && "hide-game-content"} `}
                            src={require(`../images/hide-button.png`)} alt="triangle"
                            draggable='false'
                            onMouseDown={handleChildElementMouseDown}
                            onTouchStart={handleChildElementMouseDown}
                        />


                        <div id={gameID} className={`game-box ${gameHover === gameID && 'rotation-active'} ${gameMove !== null && 'stop-rotation'}`} onClick={handleGameClick} >
                            <div className="game-face front" >
                                <img draggable='false' id={gameID} className="game-images game-image" src={require(`../images/Games/${color}-game-${game}.png`)} alt="Game" />
                            </div>
                            <div className="game-face back" >
                                <img draggable='false' id={gameID} className="game-images game-back-image" src={require(`../images/Games/${color}-game-back.png`)} alt="Game Back" />
                            </div>
                            <div className="game-face left" >
                                <img draggable='false' id={gameID} className="game-images game-side-images" src={require(`../images/Games/${color}-game-left.png`)} alt="Game Left" />
                            </div>
                            <div className="game-face right" >
                                <img draggable='false' id={gameID} className="game-images game-side-images" src={require(`../images/Games/${color}-game-right.png`)} alt="Game Right" />
                            </div>
                        </div>

                    </div>

                </div>
            )}

        </div>
    )
}

export default Games;