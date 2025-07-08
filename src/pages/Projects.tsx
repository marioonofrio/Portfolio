import './Projects.css';

function Projects() {
    const handleProjectClick = (githubLink: string) => {
        window.open(githubLink, '_blank'); // Replace this with navigation or project details logic
    };

    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project-buttons">
                <button onClick={() => handleProjectClick('https://github.com/jzeller04/AudioReminder')}>
                    <h2>AudioReminder</h2>
                    <p>This was a collaboration with other students at UNT, where we worked to make a reminder app for visually impaired students. 
                        I was responsible for the GitHub Actions section, unit testing, and deployment of the app.
                    </p>
                </button>
                <button onClick={() => handleProjectClick('https://github.com/marioonofrio/C-Shell')}>
                    <h2>C-Shell</h2>
                    <p>A lightweight custom shell in C supporting command execution, history, redirection, piping, path editing, and interactive or batch modes.</p>
                </button>
                <button onClick={() => handleProjectClick('https://github.com/marioonofrio/grok-bot')}>
                    <h2>Grok Bot</h2>
                    <p>A witty Discord bot powered by Grok AI that replies when mentioned, remembers reply threads, and fits naturally into conversations.</p>
                </button>
            </div>
        </div>
    );
}

export default Projects;