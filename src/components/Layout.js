
import '../css/Layout.css'
import homepageButton_OFF from '../images/Codeboy/skyblue-codeboy.png'
import homepageButton_ON from '../images/Codeboy/skyblue-codeboy-power-on.png'
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Layout(props) {

    const {game, topFixedLayer} = props;
    const navigate = useNavigate();
    const headerRef = useRef(null);
    const mainRef = useRef(null);

    const [homepageButtonImage, setHomepageButtonImage] = useState(homepageButton_OFF);

    
    function handleHomepageButtonClick() {
        navigate("/home")
    }

    function handleHomepageButtonHover() {
        setHomepageButtonImage(homepageButton_ON);
    }

    function handleHomepageButtonLeave() {
        setHomepageButtonImage(homepageButton_OFF);
    }

    function scrollToTop() {
        headerRef.current.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToMain() {
        mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }



    return(
        <div className="game-main-container">
            <header ref={headerRef}>
                <img src={homepageButtonImage} alt="homepage button" className='homepage-button' onClick={handleHomepageButtonClick} onMouseEnter={handleHomepageButtonHover} onMouseLeave={handleHomepageButtonLeave} />
                {game && <img src={require(`../images/Games/skyblue-game-${game}.png`)} alt="game" className='header-game-image' />}
            </header>


            {game && 
                <div className='main-art-container'>
                    <img src={require(`../images/title-${game}.png`)} alt="main-title" className='main-page-title' />
                    
                    <div className={`main-art-layers layer-1 ${game}-art`}> </div>
                    <div className={`main-art-layers layer-2 ${game}-art-layer-2`}></div>
                    <div className={`main-art-layers layer-3 ${game}-art-layer-3`}></div>

                    {topFixedLayer && 
                        <div className={`top-layer-art-skills`}>

                        </div>
                    }

                    <div className='page-arrow-down' onClick={scrollToMain}>

                    </div>
                </div>
            }


            <main ref={mainRef}>
                {props.children}

                <div className='move-up-content'>
                    <div className='page-arrow-up'>

                    </div>
                    <button className='move-up-button' onClick={scrollToTop}>
                        SCROLL TO TOP
                    </button>
                </div>
                
            </main>
        </div>

    )

}


export default Layout;