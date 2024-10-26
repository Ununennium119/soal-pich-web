import React, { useContext } from 'react';
import {ThemeContext} from "../context/ThemeContext";
import {MdModeNight, MdSunny} from "react-icons/md";

const DarkModeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
                className={`btn d-flex justify-content-center align-items-center position-fixed fs-4 p-0 ${theme === 'dark' ? "btn-light" : "btn-dark"}`}
            style={{right: '4rem', bottom: '3rem', width: '3rem', height: '3rem', zIndex: 1000}}
        >

            {theme === 'dark' ? <MdSunny/> : <MdModeNight/>}
        </button>
    );
};

export default DarkModeToggle;