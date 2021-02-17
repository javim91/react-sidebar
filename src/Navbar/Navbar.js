import React from 'react';
import './Navbar.css';

const navbar = (props) => {
    return (
        <nav className="navbar navbar-light p-0 fixed-top">
            <div className="container-fluid p-0">
                <span className="navbar-brand mb-0 h1 p-0">
                    <span className="site-name">React Sidebar</span>
                </span>
            </div>
        </nav>      
    )
};

export default navbar;