import styles from '../styles/homeStyles.css';
import portrait from '../assets/Portrait/portrait-picture-v1.webp';
import herobg from '../assets/Portrait/brickbg.png';
function Home() {
    return (
        <>
        {/* style={{backgroundImage: `url(${herobg})`}} */}
            <section id='header-section' >
                <div className='hero-wrapper'>
                    <h1 className='intro-tag'>Rolando Jule-Blanco</h1>
                    <div className='hero-image-container'>
                        <img className='hero-image' src={portrait}></img>
                    </div>
                    <div className='hero-tag-contaier'></div>
                </div>
            </section>
        </>
    );
}

export default Home;