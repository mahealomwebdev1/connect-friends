import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/friend-list">Friend list</a>
                <a href="/edit-friend-list">Edit friend list</a>
            </nav>
        </div>
    );
};

export default Header;