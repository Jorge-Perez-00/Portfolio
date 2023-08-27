
import { useEffect, useState } from 'react';
import '../css/ColorPicker.css'

function ColorPicker(props) {

    const {disable, hide, setColor} = props;

    const [showColorPicker, setShowColorPicker] = useState("hide");


    useEffect(() => {
        if(disable && showColorPicker) {
            setShowColorPicker("hide");
        }
    }, [disable, showColorPicker])


    /*
        FUNCTION THAT WILL DISPLAY OR HIDE THE COLOR BUTTONS PICKER
    */
    function handleColorButtons(event) {
        let type = event.target.id;

        if (!disable) {
            if (type === "show") {
                setShowColorPicker("show");
            }

            else if (type === "hide") {
                setShowColorPicker("hide");
            }
        }

    }

    return(
        <>
            {showColorPicker === "show" && 
                <div className={`color-buttons-container ${showColorPicker}`}>
                    <div id="normal" className="color-button color-normal" onClick={setColor}></div>
                    <div id="red" className="color-button color-red" onClick={setColor}></div>
                    <div id="orange" className="color-button color-orange" onClick={setColor}></div>
                    <div id="yellow" className="color-button color-yellow" onClick={setColor}></div>
                    <div id="skyblue" className="color-button color-skyblue" onClick={setColor}></div>
                    <div id="blue" className="color-button color-blue" onClick={setColor}></div>
                    <div id="purple" className="color-button color-purple" onClick={setColor}></div>
                    <div id="pink" className="color-button color-pink" onClick={setColor}></div>

                    <button id={"hide"} className={`arrow-buttons colors-hide-button ${hide ? "disable-content" : ""} `} onClick={handleColorButtons}>
                    </button>
                </div>
            }
          

            {showColorPicker === "hide" &&
                <button id={"show"} className={`arrow-buttons colors-show-button ${hide ? "disable-content" : ""} `} onClick={handleColorButtons}>
                </button>
            }
        </>
       
    )
}

export default ColorPicker;