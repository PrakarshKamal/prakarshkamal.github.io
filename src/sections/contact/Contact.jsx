import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const contactFormRef = useRef();

  const sendEmail = (email) => {
    email.preventDefault();

    emailjs
      .sendForm(
        "service_bm5lo92",
        "contact_form",
        contactFormRef.current,
        "FhPhEFnTv05Wi4XBF"
      )
      .then(
        () => {
          alert("Your message has been sent!");
          window.location.reload();
        },
        () => {
          alert("Failed to send, please try again");
        }
      );
  };

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="text-zone">
          <h2 className="contact-me">Contact Me</h2>
          <p className="para-text">
            I am interested in software development / front-end positions. For
            any questions or to chat, feel free to use the form below to send me
            a message! ☕
          </p>
          <div className="contact-form">
            <form ref={contactFormRef} onSubmit={sendEmail}>
              <ul>
                <li className="half-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </li>
                <li className="half-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    required
                  />
                </li>
                <li>
                  <input
                    type="submit"
                    name="submit"
                    className="button primary"
                    value="Send"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
