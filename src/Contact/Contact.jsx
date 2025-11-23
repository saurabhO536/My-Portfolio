import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1 className="h1">Contact</h1>

      <p className="contact-text">
        If you'd like to discuss frontend work, architecture-heavy problems, or
        FinTech products, feel free to reach out.
      </p>

      <div className="contact-list">
        <div>
          <h4>Email</h4>
          <a href="mailto:saurabhpatil8426@gmail.com">
            saurabhpatil8426@gmail.com
          </a>
        </div>

        <div>
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/saurabh-patil-453a13157/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/saurabh-patil
          </a>
        </div>

        <div>
          <h4>GitHub</h4>
          <a
            href="https://github.com/saurabhO536"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/saurabhO536
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
