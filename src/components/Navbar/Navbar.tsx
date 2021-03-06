import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2">
                <NavLink to="/" className="brand-logo">React + TypeScript</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;