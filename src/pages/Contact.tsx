import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
function Contact() {
    const [formData, setFormData] = useState({ name: '', message: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                'service_j44y7in',
                'template_07h2dr6',
                formData,
                'Ntb0UN6WTzZ6WaXhS'

            )
            .then(
                () => setMessage('Message sent successfully!'),
                (error) => setMessage('Failed to send message. Please try again.')
            );
    };

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Send</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Contact;