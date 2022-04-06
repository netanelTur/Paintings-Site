import "./Contact.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import apikey from "./emailkey";
import { useRef } from "react";
import { pageVariants, pageTransition } from "./../../animations.js";

emailjs.init(apikey.USER_ID);

const Contact = () => {
    const form = useRef();

  const handleSubmit = (e) => {
      console.log(form.current)
      console.log(apikey.TEMPLATE_ID)
      console.log(apikey.USER_ID)
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(apikey.SERVICE_ID, apikey.TEMPLATE_ID, form.current, apikey.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <motion.form
      className="contact-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      ref={form}
      onSubmit={handleSubmit}
    >
      <h1 className="form-title">Get In Touch</h1>
      <input type="text" className="form-name" name="user_name" placeholder="Name" required />
      <input type="text" className="form-email" name="user_email" placeholder="Email" required />
      <textarea
        className="form-message"
        name="message"
        placeholder="Type your message here"
        required
      />
      <button type="submit" className="form-button">
        Submit
      </button>
    </motion.form>
  );
};

export default Contact;
