import React from 'react';
import { NavLink } from 'react-router';

export function NavBar() {
    return (
        <nav className="nav-container">
            <div className="brand-name">
                <NavLink to="/">YogaEase</NavLink>
            </div>
            <div id="hamburger-menu">
                <a href="#">
                    <i className="fa fa-bars" aria-label="menu"></i>
                </a>
            </div>
            <div className="menu-links">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/my-classes">My Classes</NavLink></li>
                    <li><NavLink to="/login">Sign-in</NavLink></li>
                </ul>
            </div>
        </nav>

    );
}