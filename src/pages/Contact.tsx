import React from 'react';
import './Contact.css';
function Contact() {
    return (
        <div className="body">
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
        </div>
    );
}

export default Contact;