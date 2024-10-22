import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../scss/_sidebar.scss'

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-heading">So'al Pich</div>
            <ul className="sidebar-items-wrapper">
                <li className={`sidebar-item ${location.pathname.endsWith('dashboard') ? 'selected' : ''}`}>
                    <Link to='/player/dashboard'>Dashboard</Link>
                </li>
                <li className={`sidebar-item ${location.pathname.endsWith('questions') ? 'selected' : ''}`}>
                    <Link to='/player/questions'>Questions</Link>
                </li>
                <li className={`sidebar-item ${location.pathname.endsWith('scoreboard') ? 'selected' : ''}`}>
                    <Link to='/player/scoreboard'>Scoreboard</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;