import React from 'react';
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Mario Onofrio. All rights reserved.</p>
            <div className="social-links">
                <a href="https://github.com/marioonofrio" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/mario-onofrio-154857255" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;