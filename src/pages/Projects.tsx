import React from 'react';
import './projects.css';

function Projects() {
    const handleProjectClick = (githubLink: string) => {
        window.open(githubLink, '_blank'); // Replace this with navigation or project details logic
    };

    return (
        <div className="projects">
            <h1>My Projects</h1>
            <p>Here are some of the projects I've worked on:</p>
            <div className="project-buttons">
                <button onClick={() => handleProjectClick('https://github.com/jzeller04/AudioReminder')}>
                    <h2>AudioReminder</h2>
                    <p>This was a collaboration with other students at UNT, where we worked to make a reminder app for visually impaired students. 
                        I was responsible for the GitHub Actions section, unit testing, and deployment of the app.
                    </p>
                </button>
                <button onClick={() => handleProjectClick('Project 2')}>
                    <h2>Project 2</h2>
                    <p>This is empty (for now)</p>
                </button>
                <button onClick={() => handleProjectClick('Project 3')}>
                    <h2>Project 3</h2>
                    <p>This is empty (for now)</p>
                </button>
            </div>
        </div>
    );
}

export default Projects;