import React from 'react';
import './Header.css';

function Header() {
    return (
        <header style={styles.header as React.CSSProperties}>
            <nav style={styles.nav}>
                <a href="#home" style={styles.link}>Home</a>
                <a href="#about" style={styles.link}>About</a>
                <a href="#projects" style={styles.link}>Projects</a>
                <a href="#contact" style={styles.link}>Contact</a>
            </nav>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: '#282c34',
        padding: '20px',
        textAlign: 'center',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center', // Center the links
        gap: '100px', // Add space between the links
    },
    link: {
        color: '#61dafb',
        textDecoration: 'none',
        fontSize: '20px',
    },
};

export default Header;