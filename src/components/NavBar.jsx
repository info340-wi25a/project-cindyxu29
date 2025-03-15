import React from 'react';
import { NavLink, Link } from 'react-router';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';



export function NavBar() {
    const [signedIn, setSignedIn] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        //returns a function that will "unregister" (turn off) the listener
        const unregisterFunction = onAuthStateChanged(auth, (firebaseUser) => {
          //handle user state change
          if(firebaseUser){
            setSignedIn(true);
          } else {
            setSignedIn(false);
          }
        })
    
        //cleanup function for when component is removed
        function cleanup() {
          unregisterFunction(); //call the unregister function
        }
        return cleanup; //effect hook callback returns the cleanup function
      }, []);

    const handleSignOut = () => {
        signOut(auth)
            .catch(err => console.log(err));
    }

    function renderNavButton() {
        if (signedIn) {
            return (
                <Dropdown.Item as="button" onClick={handleSignOut}>
                    Sign Out
                </Dropdown.Item>
            );
        } else {
            return (
                <Dropdown.Item as={Link} to="/login">
                    Sign In
                </Dropdown.Item>
            );
        }
    }

    function renderDropDownButton() {
        if (signedIn) {
            return <button onClick={handleSignOut}>Sign Out</button>;
        } else {
            return <NavLink to="/login">Sign In</NavLink>;
        }
    }


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
                        <li>{ renderNavButton() }</li>
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
                        { renderDropDownButton() }
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </header>
    );
}