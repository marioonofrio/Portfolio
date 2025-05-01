import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/projects" className="link">Projects</Link>
                <Link to="#contact" className="link">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;