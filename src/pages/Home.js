import styles from '../styles/homeStyles.css';
import RJLogo from '../components/icons/RJLogo';
import Message  from '../components/Message';
import portrait from '../assets/Portrait/portrait-cutout.png';
import Header from '../components/Header';

function Home() {

    return (
        <>
            <Header></Header>
            <section id="home-section">
                <div id="introduction-wrapper">
                    <h1 className='intro-header'>Hi,</h1>
                    <span className='intro-header'>I'm </span><Message className="intro-header intro-message" text={`Rolando Jule.`} speed={100}/>
                    <p className='intro-about'>I'm a Software Engineer who found a passion building clean, scalable, and user-focused web solutions.</p>
                </div>
                <RJLogo className={'screen-icon'}/>
                <div id="profile-wrapper">
                    <img id="profile-img" src={portrait} />
                </div>
            </section>
        </>
    );
}

export default Home;