import React, { useContext } from 'react';
import {ThemeContext} from "../context/ThemeContext";

const DarkModeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
                className={`btn position-fixed ${theme === 'dark' ? "btn-light" : "btn-dark"}`}
            style={{right: '4em', bottom: '3em', width: '40px', zIndex: 1000}}
        >
            {theme === 'dark' ? '☀' : '☾'}
        </button>
    );
};

export default DarkModeToggle;