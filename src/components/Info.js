
import { useState } from 'react';
import '../css/Info.css'

let number = 0;

function Info(props) {

    const { disable, hide } = props;

    const text = {
        click: "\"You can click on each game to view it at a bigger size and to navigate to the game page\"",
        dragdrop: "\"You can also drag and drop each game into the codeboy to quickly navigate to the game page\""
    }

    let [showInfo, setShowInfo] = useState(false);

    let [infoType, setInfoType] = useState("click")
    let [characterText, setCharacterText] = useState(text["click"])
   
    function handleMainButtonClick() {
        if(!disable) {
            setShowInfo(true);
        }
    }

    function handleClick() {
        //ON FIRST INFO CLICK SHOW NEW INFO (SHOW DRAG AND DROP INFO)
        if(number === 0) {
            setInfoType("dragdrop");
            setCharacterText(text["dragdrop"]);
            number = 1;
        }

        //ON SECOND INFO CLICK GO BACK TO HOMEPAGE AND RESET INFO (RESET INFO TO ONCLICK INFO)
        else if(number === 1) {
            setShowInfo(false);
            setInfoType("click");
            setCharacterText(text["click"]);
            number = 0;
        }
    }

    return(
        <>
            {!showInfo && 
                <div 
                    className='info-button' 
                    onClick={handleMainButtonClick}
                    title='Quick info about the features on the homepage'
                    style={hide === true ? {opacity: 0.4} : null}></div>
            }

            {showInfo && 
                <div className='info-container' onClick={handleClick}>
                    <div key={infoType} className={`info-animation ${infoType}`}>

                    </div>

                    <div className='info-character-container'>
                        <div className='info-character'>

                        </div>

                        <div className='info-character-text-container'>
                            <h1 className='info-character-name'>Jorge:</h1>
                            <p className='info-character-text'>
                                {characterText}
                            </p>
                        </div>

                       
                
                    </div>
                   
                </div>
            }


        </>
    )
}

export default Info;