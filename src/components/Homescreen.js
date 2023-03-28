
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Homescreen.css'



function Homescreen(props) {

    const navigate = useNavigate();


    const {onStart} = props;

    let [startClicked, setStartClicked] = useState(false);

    let [characterCentered, setCharacterCentered] = useState(false);

    

    function handleClick() {
        console.log("CLICKED !")

        
        setStartClicked(true);

        let timeout = setTimeout(() => {
            console.log('Timeout');
            setCharacterCentered(true);
        }, 3000)

        let timeout2 = setTimeout(() => {
            console.log('Timeout 2');
            onStart();
        }, 5700)

        let timeout3 = setTimeout(() => {
            console.log('Timeout 3');
            navigate("/home");
        },6400)

    }


    return (
        <div className="container">


           
            <div className={`homescreen-title ${startClicked ? 'hide-homescreen-title' : null} `}>

            </div>

            <div className={`homescreen-start-button ${startClicked ? 'hide-start-button' : null} `} onClick={handleClick}>

            </div>

            <div className={`character ${startClicked ? 'character-animation-transition' : ""} ${characterCentered ? 'character-centered' : null} `}>

            </div>

            <div className="main-layer-container" >
                
                <div className={`layers light-post-layer ${startClicked ? 'stop-infinite-scrolling' : null}  `} >

                </div>
                <div className={`layers main-layer ${startClicked ? 'stop-infinite-scrolling' : null} `} >

                </div>
                <div className={`layers sky-layer ${startClicked ? 'stop-infinite-scrolling' : null} `}>

                </div>

                <div className={`layers buildings-layer ${startClicked ? 'stop-infinite-scrolling' : null}`}> 

                </div>

              
            </div>

        </div>
    )
}

export default Homescreen;