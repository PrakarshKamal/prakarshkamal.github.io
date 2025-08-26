import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const SERVICE_ID = "service_1mww4of";
const TEMPLATE_ID = "contact_form";
const PUBLIC_KEY = "LG2TvDCjl2fYbou-4";

const Contact = () => {
  const contactFormRef = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!contactFormRef.current || sending) return;

    try {
      setSending(true);
      const res = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        contactFormRef.current,
        PUBLIC_KEY
      );
      console.log("EmailJS success:", res);
      alert("Your message has been sent!");
      contactFormRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      const msg =
        err?.text ||
        err?.message ||
        "Failed to send. Please try again or contact me via LinkedIn.";
      alert(msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="text-zone">
          <h2 className="contact-me">Contact Me</h2>
          <p className="para-text">
            I am interested in software development roles. For any questions or
            to chat, use the form below to send me a message. ☕
          </p>

          <div className="contact-form">
            <form ref={contactFormRef} onSubmit={sendEmail} noValidate>
              <ul>
                <li className="half-row">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    aria-label="Your name"
                  />
                </li>
                <li className="half-row">
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Your Email"
                    required
                    aria-label="Your email"
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={6}
                    aria-label="Your message"
                  />
                </li>

                <li style={{ display: "none" }}>
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </li>

                <li>
                  <button
                    type="submit"
                    name="submit"
                    className="button primary"
                    disabled={sending}
                    aria-busy={sending}
                  >
                    {sending ? "Sending..." : "Send"}
                  </button>
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
