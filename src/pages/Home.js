import { useEffect } from 'react';
import '../styles/homeStyles.css';
import RJLogo from '../components/icons/RJLogo';
import Message  from '../components/Message';
import portrait from '../assets/Portrait/portrait-cutout.png';
import Header from '../components/Header';
import AboutMe from './AboutMe';

function Home() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    //javascript automatically takes the dataset class and reads it as dataset.classNameClass (attribute = data-inview-class)
                    const inView = entry.target.dataset.inviewClass;
                    if (inView) {
                        entry.target.classList.add(inView);
                    }
                }
            });
        });

        const elementsToObserve = document.querySelectorAll(`[data-inview-class]`);
        elementsToObserve.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, []);

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
                <div id="profile-wrapper" data-inview-class="profile-inview">
                    <img id="profile-img" src={portrait} />
                </div>
            </section>
            <AboutMe />
        </>
    );
}

export default Home;