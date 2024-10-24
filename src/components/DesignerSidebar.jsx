import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../scss/_sidebar.scss'
import {routes} from "../routes";

const DesignerSidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-heading">So'al Pich</div>
            <ul className="sidebar-items-wrapper">
                <li className={`sidebar-item ${location.pathname.endsWith('dashboard') ? 'selected' : ''}`}>
                    <Link to={routes.designerDashboard}>Dashboard</Link>
                </li>
                <li className={`sidebar-item ${location.pathname.endsWith('questions') ? 'selected' : ''}`}>
                    <Link to={routes.designerQuestions}>Questions</Link>
                </li>
                <li className={`sidebar-item ${location.pathname.endsWith('categories') ? 'selected' : ''}`}>
                    <Link to={routes.designerCategories}>Categories</Link>
                </li>
            </ul>
        </div>
    );
}

export default DesignerSidebar;