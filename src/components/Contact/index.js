import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Let's Connect!</h1>
            <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198536.88562804824!2d-94.41278012449813!3d38.96649766434252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0bda499dde79f%3A0x2a2078e3d2b8d9d9!2sJohnson%20County%2C%20KS!5e0!3m2!1sen!2sus!4v1653276657923!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"></iframe>

            <div className="social">
                <h4>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethanfox1/">
                    https://www.linkedin.com/in/ethanfox1/
                </a>
                </p>

                <h4>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Efox6179">
                    https://github.com/Efox6179
                </a>
                </p>

                <h4>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="Efox6179@icloud.com">
                        Efox6179@icloud.com
                </a>
                </p>

                <h4>Resume</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href=".">
                        Coming soon!
                </a>
                </p>

            
            </div>
        </div>
    )
}

export default Contact;