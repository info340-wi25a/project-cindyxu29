import React from 'react';
import { NavLink, Link } from 'react-router';
import Dropdown from 'react-bootstrap/Dropdown';


export function NavBar() {
    return (
        
        <header className="header-container">
            <nav className="nav-container">
                <div className="brand-name">
                    <img src="../../img/favicon.png" alt="YogaEase Logo" className="nav-logo" />
                    <NavLink to="/">YogaEase</NavLink>
                </div>
                <div className="menu-links">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/my-classes">My Classes</NavLink></li>
                        <li><NavLink to="/login">Sign-in</NavLink></li>
                    </ul>
                </div>

                <Dropdown className="hamburger-menu">
                    <Dropdown.Toggle variant="dark" id ="dropdown-basic">
                        Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/">
                            Home
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/my-classes">
                            My Classes
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/login">
                            Sign-in
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </header>
    );
}