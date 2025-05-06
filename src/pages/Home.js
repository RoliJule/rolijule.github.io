import styles from '../styles/homeStyles.css';
import RJLogo from '../components/icons/RJLogo';
import Message  from '../components/Message';
import portrait from '../assets/Portrait/portrait-cutout.png';
import herobg from '../assets/Portrait/ChatGPT Image Apr 29, 2025, 11_26_12 AM.png';
function Home() {
    return (
        <>
            <div className="screen-wrapper">
                <div className="screen-bezel">
                    <div className="screen-content">
                        <div id="introduction-wrapper">
                            <h1 className='intro-header'>Hi,</h1>
                            <span className='intro-header'>I'm </span><Message className="intro-header intro-message" text={`Rolando Jule.`} speed={100}/>
                            <p className='intro-about'>I'm a Full Stack Web Developer who builds clean, scalable, and user-focused web solutions. I enjoy working across both front-end and back-end to turn ideas into functional, impactful products.</p>
                        </div>
                        <RJLogo className={'screen-icon'}/>
                        <div id="profile-wrapper">
                            <img id="profile-img" src={portrait} />
                        </div>
                    </div>
                </div>
                <div class="stand-neck"></div>
            </div>
            <div id="homepage-nav">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Explore</a>
                    <a href="">Projects</a>
            </div>
        </>
    );
}

export default Home;