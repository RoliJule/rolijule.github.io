import React from "react";
import { useState, useEffect } from 'react';


const Message = ({ className, text, speed = 100 }) => {
    const [displayed, setDisplayed] = useState('');
  
    useEffect(() => {
      // Reset whenever `text` changes
      setDisplayed('');
  
      // A flag so we can cancel if the component unmounts
      let cancelled = false;
  
      // Recursive typing function
      function typeChar(i) {
        if (cancelled) return;         // stop if we’ve unmounted
        if (i < text.length) {
          // append exactly one character
          setDisplayed(prev => prev + text.charAt(i));
          // schedule the next character
          setTimeout(() => typeChar(i + 1), speed);
        }
      }
  
      // kick off typing at character 0
      typeChar(0);
  
      // cleanup on unmount
      return () => {
        cancelled = true;
      };
    }, [text, speed]);
  
    return (
        <span 
            className={`command-line ${className}`.trim() }  
        >
            {displayed}
        </span>
    );
  };
export default Message;