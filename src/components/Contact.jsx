import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <>
            <h1>Contact Me</h1>

            <div className="contact-container">
                <h2>Let's Connect</h2>

                <p>
                    Feel free to reach out to me for opportunities,
                    collaborations, or any questions.
                </p>
                <p>
                    Email: <a href="mailto:ravitejautti@gmail.com">ravitejautti@gmail.com</a>
                </p>

                <p>
                    GitHub:
                    <a
                        href="https://github.com/ravitejautti7"
                        target="_blank"
                        rel="noreferrer"
                    >
                    github.com/ravitejautti7
                    </a>
                </p>
            </div>
        </>
    );
}

export default Contact;