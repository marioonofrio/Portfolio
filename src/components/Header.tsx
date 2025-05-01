import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#home" className="link">Home</a>
                <a href="#about" className="link">About</a>
                <a href="#projects" className="link">Projects</a>
                <a href="#contact" className="link">Contact</a>
            </nav>
        </header>
    );
}

export default Header;