import React from 'react';
import { useEffect, useRef } from 'react';
import '../styles/headerStyles.css';
import RJLogo from './icons/RJLogo';

const Header = () => {

    return (
        <header className="siteHeader">
            <RJLogo className={'header-icon'}/>
        </header>
        
    );
};

export default Header;