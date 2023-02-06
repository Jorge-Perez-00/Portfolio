import { Component } from "react";
import '../css/Homepage.css'

import leftButtonImage from '../images/left-button.png'
import rightButtonImage from '../images/right-button.png'
/*
import showButtonImage from '../images/show-button.png'
import hideButtonImage from '../images/hide-button.png'
*/



class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            animation: "right-slide-animation",
            colorButtons: "hide",
            color: "normal",
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

        this.setState({
            display: newDisplay,
            animation: number === 1 ? "right-slide-animation" : "left-slide-animation",
        })

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


    render() {
        return (
            <div className={`main-container bg-${this.state.color}`}/*'main-container'*/>

                <div className="colors-main=container">
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
                            {/*<img id={"hide"} src={hideButtonImage} alt="" />*/}
                        </button>
                    </div>
                    
                    {this.state.colorButtons === "hide" && 
                        <button id={"show"} className="arrow-buttons colors-show-button" onClick={this.handleColorButtons}>
                            {/*<img id={"show"} src={showButtonImage} alt=""  />*/}
                        </button> 
                    }
                  
                </div>

              

                <div className='container1'>
                    <div className='games-container'>
                        <button id={-1} className='slideshowButtons left-button' onClick={this.updateGameDisplay}>
                            <img id={-1} src={leftButtonImage} alt="left button" className='buttonImages' />
                        </button>
                        <button id={1} className='slideshowButtons right-button' onClick={this.updateGameDisplay}>
                            <img id={1} src={rightButtonImage} alt="right button" className='buttonImages' />
                        </button>
                        <div className={`game game0 ${this.state.display === 0 ? "active " + this.state.animation : ""}`}>
                            <img key={this.state.color} className="game-image" src={require(`../images/${this.state.color}-game-aboutme.png`)} alt="Game" />
                        </div>
                        <div className={`game game1 ${this.state.display === 1 ? "active " + this.state.animation : ""}`}>
                            <img key={this.state.color} className="game-image" src={require(`../images/${this.state.color}-game-skills.png`)} alt="Game" />
                        </div>

                        <div className={`game game2 ${this.state.display === 2 ? "active " + this.state.animation : ""}`}>
                            <img key={this.state.color} className="game-image" src={require(`../images/${this.state.color}-game-maze.png`)} alt="Game" />
                        </div>

                        <div className={`game game3 ${this.state.display === 3 ? "active " + this.state.animation : ""}`}>
                            <img key={this.state.color} className="game-image" src={require(`../images/${this.state.color}-game-tictactoe.png`)} alt="Game" />
                        </div>

                        <div className={`game game4 ${this.state.display === 4 ? "active " + this.state.animation : ""}`}>
                            <img key={this.state.color} className="game-image" src={require(`../images/${this.state.color}-game-links.png`)} alt="Game" />
                        </div>

                        <div className={`game game5 ${this.state.display === 5 ? "active " + this.state.animation : ""}`}>
                            <img key={this.state.color} className="game-image" src={require(`../images/${this.state.color}-game.png`)} alt="Game" />
                        </div>
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