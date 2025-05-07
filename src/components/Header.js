import React from 'react';
import { useEffect, useRef } from 'react';
import '../styles/headerStyles.css';
import RJLogo from './icons/RJLogo';

const Header = () => {

    return (
        <header className="siteHeader">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Experience</a>
            <a href="">Projects</a>
        </header>
        
    );
};

export default Header;