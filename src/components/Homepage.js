import { Component } from "react";
import '../css/Homepage.css'

import leftButtonImage from '../images/left-button.png'
import rightButtonImage from '../images/right-button.png'
import Codeboy from '../images/Normal Codeboy.png'

import Game from '../images/Normal Game.png'

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            animation: "right-slide-animation",
        }
    }

    updateGameDisplay = (event) => {
        let number = parseInt(event.target.id, 10)

        let newDisplay = this.state.display + number;
        if (newDisplay === -1) {
            newDisplay = 1;
        }
        else if (newDisplay === 2) {
            newDisplay = 0;
        }

        this.setState({
            display: newDisplay,
            animation: number === 1 ? "right-slide-animation" : "left-slide-animation",
        })

    }


    render() {
        return (
            <div className='main-container'>
                <div className='container1'>
                    <div className='games-container'>
                        <button id={-1} className='slideshowButtons left-button' onClick={this.updateGameDisplay}>
                            <img id={-1} src={leftButtonImage} alt="left button" className='buttonImages' />
                        </button>
                        <button id={1} className='slideshowButtons right-button' onClick={this.updateGameDisplay}>
                            <img id={1} src={rightButtonImage} alt="right button" className='buttonImages' />
                        </button>
                        <div className={`game game0 ${this.state.display === 0 ? "active " + this.state.animation : ""}`}>
                            <img src={Game} alt="Game" />
                        </div>
                        <div className={`game game1 ${this.state.display === 1 ? "active " + this.state.animation : ""}`}>
                            <img src={Game} alt="Game" />
                        </div>

                        <div className={`game game2 ${this.state.display === 2 ? "active " + this.state.animation : ""}`}>
                            <img src={Game} alt="Game" />
                        </div>

                        <div className={`game game3 ${this.state.display === 3 ? "active " + this.state.animation : ""}`}>
                            <img src={Game} alt="Game" />
                        </div>

                        <div className={`game game4 ${this.state.display === 4 ? "active " + this.state.animation : ""}`}>
                            <img src={Game} alt="Game" />
                        </div>

                        <div className={`game game5 ${this.state.display === 5 ? "active " + this.state.animation : ""}`}>
                            <img src={Game} alt="Game" />
                        </div>
                    </div>

                </div>

                <div className='container2'>
                    <div className='codeboy'>
                        <img src={Codeboy} alt="Codeboy" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;