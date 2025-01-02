import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {MdCategory, MdExitToApp, MdQuestionMark} from "react-icons/md";
import logo from '/src/assets/logo.png?url'
import {routes} from "../routes";
import '../scss/_sidebar.scss'
import {logout} from "../api/AuthenticationApi";
import {toast} from "react-toastify";

const DesignerSidebar = () => {
    const location = useLocation();

    const handleLogout = async () => {
        await logout()
        localStorage.removeItem("jwtToken");
        toast.success("Logged out successfully!")
    };

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-heading">
                <img src={logo} alt="logo"/>
                <b>Soal Pich</b>
            </div>
            <ul className="sidebar-items-wrapper">
                {/*<li className={`sidebar-item ${location.pathname === routes.designerDashboard ? 'selected' : ''}`}>*/}
                {/*    <Link to={routes.designerDashboard}>*/}
                {/*        <MdDashboard className="sidebar-item-icon"/>Dashboard*/}
                {/*    </Link>*/}
                {/*</li>*/}
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
                <li className={'sidebar-item'}>
                    <Link onClick={() => handleLogout()} to={routes.login}>
                        <MdExitToApp className="sidebar-item-icon"/> Logout
                    </Link>
                </li>
            </ul>

        </div>
    );
}

export default DesignerSidebar;