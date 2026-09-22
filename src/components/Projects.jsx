import React from "react";
import "./Projects.css";
function Projects() {
    return (
        <>
            <h1>My Projects</h1>
            <div className="projects-container">
                <div className="project-card">
                <h2>Fake Store Application</h2>

                <p>
                    A responsive e-commerce application built using HTML,
                    CSS, and JavaScript with product data fetched from an API.
                </p>

                <h3>Technologies</h3>

                <ul className="tech-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Fetch API</li>
                </ul>

                <a
                    href="https://ravitejautti7.github.io/fake-store-app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Live Demo
                </a>

                <a
                    href="https://github.com/ravitejautti7/fake-store-app"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </div>

            
            <div className="project-card">
                <h2>YouTube Homepage Clone</h2>

                <p>
                    A responsive YouTube homepage clone built using HTML5
                    and CSS3 with a responsive video grid.
                </p>

                <h3>Technologies</h3>

                <ul className="tech-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Flexbox</li>
                    <li>CSS Grid</li>
                </ul>

                <a
                    href="https://ravitejautti7.github.io/youtube-clone/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Live Demo
                </a>

                <a
                    href="https://github.com/ravitejautti7/youtube-clone"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </div>
            </div>

            

        </>
    );
}

export default Projects;