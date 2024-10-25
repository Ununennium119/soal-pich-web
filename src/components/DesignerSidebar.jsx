import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {MdCategory, MdDashboard, MdQuestionMark} from "react-icons/md";
import logo from '/public/logo512.png'
import {routes} from "../routes";
import '../scss/_sidebar.scss'

const DesignerSidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-heading">
                <img src={logo} alt="logo"/>
                <b>Soal Pich</b>
            </div>
            <ul className="sidebar-items-wrapper">
                <li className={`sidebar-item ${location.pathname === routes.designerDashboard ? 'selected' : ''}`}>
                    <Link to={routes.designerDashboard}>
                        <MdDashboard className="sidebar-item-icon"/>Dashboard
                    </Link>
                </li>
                <li className={`sidebar-item ${location.pathname === routes.designerQuestions ? 'selected' : ''}`}>
                    <Link to={routes.designerQuestions}>
                        <MdQuestionMark className="sidebar-item-icon"/>Questions
                    </Link>
                </li>
                <li className={`sidebar-item ${location.pathname === routes.designerCategories ? 'selected' : ''}`}>
                    <Link to={routes.designerCategories}>
                        <MdCategory className="sidebar-item-icon"/>Categories
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default DesignerSidebar;