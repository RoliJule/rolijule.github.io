import styles from '../styles/homeStyles.css';
import RJLogo from '../components/icons/RJLogo';
import Message  from '../components/Message';
import portrait from '../assets/Portrait/portrait-picture-v1.webp';
import herobg from '../assets/Portrait/ChatGPT Image Apr 29, 2025, 11_26_12 AM.png';
function Home() {
    return (
        <>
            <div className="screen-wrapper">
                <div className="screen-bezel">
                    <div className="screen-content">
                        <RJLogo className={'screen-icon'}/>
                        <Message className="intro-message" text={`->Hello, \n->My name is Rolando Jule. \n->Welcome and enjoy!`} speed={100}/>
                    </div>
                </div>
                <div id="homepage-nav">
                <a href="">About</a>
                <a href="">Explore</a>
                <a href="">Projects</a>
            </div>
            </div>
        </>
    );
}

export default Home;