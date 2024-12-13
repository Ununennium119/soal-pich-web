import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../scss/_sidebar.scss'
import logo from '/src/assets/logo.png?url'
import {routes} from "../routes";
import {MdDashboard, MdQuestionMark, MdTableRows} from "react-icons/md";

const PlayerSidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-heading">
                <img src={logo} alt="logo" className="me-2" style={{width: "40px"}}/>
                <b>Soal Pich</b>
            </div>
            <ul className="sidebar-items-wrapper">
                {/*<li className={`sidebar-item ${location.pathname === routes.playerDashboard ? 'selected' : ''}`}>*/}
                {/*    <Link to={routes.playerDashboard}>*/}
                {/*        <MdDashboard className="sidebar-item-icon"/>Dashboard*/}
                {/*    </Link>*/}
                {/*</li>*/}
                <li className={`sidebar-item ${location.pathname === routes.playerQuestions ? 'selected' : ''}`}>
                    <Link to={routes.playerQuestions}>
                        <MdQuestionMark className="sidebar-item-icon"/>Questions
                    </Link>
                </li>
                <li className={`sidebar-item ${location.pathname === routes.playerScoreboard ? 'selected' : ''}`}>
                    <Link to={routes.playerScoreboard}>
                        <MdTableRows className="sidebar-item-icon"/>Scoreboard
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default PlayerSidebar;