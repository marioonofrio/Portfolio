import React, { useState } from 'react';
import './About.css';

function About() {
    return (
        
        <div>
            <h1>About Me</h1>
            <p className="about-paragraph first-paragraph">
                I was born in Chicago, but I've spent most of my life in Texas, where I graduated from Lone Star High School. 
                I'm currently a Computer Science student at the University of North Texas. Ever since I got into programming, 
                I've been drawn to how technology can be used to create, improve, and solve real-world problems. What started 
                as curiosity quickly turned into a passion.
            </p> 
            <p className="about-paragraph">
                Over the years, I've picked up a solid range of skills in different programming languages like Java, C, C++,
                Python, JavaScript, and SQL. I've also spent time working with React, building user interfaces that are both 
                functional and user-friendly. Whether I'm working on a school project, collaborating with classmates, or coding 
                something for fun, I enjoy being hands-on and figuring things out as I go. Debugging might be frustrating at times, 
                but there's something satisfying about finally getting something to work the way you envisioned.
            </p>
            <p className="about-paragraph">
                I'm especially interested in full-stack development and love the challenge of connecting everything from front-end 
                to back-end. Lately, I've also been exploring areas like cloud computing and cybersecurity, trying to broaden my 
                understanding of the field. I like learning by doing — building projects, running into problems, and learning how to 
                fix them. I believe that's the best way to grow as a developer.
            </p>
            <p className="about-paragraph">
                Outside of coding, I'm someone who enjoys staying curious and picking up new skills whenever I can. I'm always open to 
                new opportunities to work on interesting problems, build cool things, and keep improving — one project at a time.
            </p>
        </div>
    );
}

export default About;