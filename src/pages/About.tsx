import React, { useState } from 'react';
import './About.css';

function About() {
    const [rows, setRows] = useState([
        { key: 'Name', value: 'Mario Onofrio' },
        { key: 'Age', value: '25' },
        { key: 'City', value: 'Denton' },
        { key: 'Hobbies', value: 'Coding, Gaming, Reading' }
    ]);

    const addRow = () => {
        setRows([...rows, { key: '', value: '' }]);
    };

    return (
        
        <div>
            <h1>About Me</h1>
            <table className="about-table">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => (
                        <tr key={idx}>
                            <td>{row.key}</td>
                            <td>{row.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default About;