import React from "react";
import "./About.css";
function About(){
    return(
        <>
            <h1>About Me</h1>
            <h2>Technical Skills</h2>
            <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Responsive Web Design</li>
                <li>DOM Manipulation</li>
                <li>Fetch API</li>
                <li>Flexbox</li>
                <li>CSS Grid</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
            </ul>
            <h2>Education</h2>
            <div className="education-card">
                <h3>B.Tech in Computer Science and Engineering</h3>
                <p>GITAM School of Technology, Bangalore</p>
                <p>2021-2025</p>
                <p>CGPA: 7.35/10</p>
            </div>
            <div className="education-card">
            <h3>Intermediate</h3>
                <p>Narayana Junior College, Vijayawada</p>
                <p>2019-2021</p>
                <p>65%</p>
            </div>
            <div className="education-card">
                <h3>SSC</h3>
                <p>Bhashyam High School</p>
                <p>2018-2019</p>
                <p>9.5/10</p>
            </div>
            
            <h2>Experience</h2>
            <div className="experience-card">
                <h3>Software Developer Intern</h3>
                <p>Infosys Springboard — 2 Months</p>
                <h4>Technologies Used</h4>
                <ul className="tech-list">
                    <li>React.js</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                </ul>
                <ul className="experience-points">
                    <li>Implemented role-based authentication for Admin, Doctor, and Patient.</li>
                    <li>Developed doctor approval and appointment booking workflows.</li>
                    <li>Implemented medical records, prescriptions, and patient reports.</li>
                    <li>Integrated payment processing and notifications.</li>
                </ul>
                
            </div>


        </>
    )
}

export default About;