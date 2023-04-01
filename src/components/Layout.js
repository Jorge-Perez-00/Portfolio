
import '../css/Layout.css'
import skyblueCodeboy_OFF from '../images/skyblue-codeboy.png'
import skyblueCodeboy_ON from '../images/skyblue-codeboy-power-on.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Layout(props) {

    const {game} = props;
    const navigate = useNavigate()

    const [homepageButtonImage, setHomepageButtonImage] = useState(skyblueCodeboy_OFF);

    
    function handleHomepageButtonClick() {
        navigate("/home")
    }

    function handleHomepageButtonHover() {
        setHomepageButtonImage(skyblueCodeboy_ON);
    }

    function handleHomepageButtonLeave() {
        setHomepageButtonImage(skyblueCodeboy_OFF);
        
    }



    return(
        <div className="game-main-container">
            <header>
                <img src={homepageButtonImage} alt="homepage button" className='homepage-button' onClick={handleHomepageButtonClick} onMouseEnter={handleHomepageButtonHover} onMouseLeave={handleHomepageButtonLeave} />
                {game && <img src={require(`../images/title-${game}.png`)} alt="title" className='header-title' />}
                {game && <img src={require(`../images/skyblue-game-${game}.png`)} alt="game image" className='header-game-image' />}
            </header>
            {props.children}

        </div>

    )

}


export default Layout;