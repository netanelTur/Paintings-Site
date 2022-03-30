import "./Contact.css";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./../../animations.js";

const Contact = () => {
    return (
        <motion.div
            className="contact-container"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <h1 className="form-title">Get In Touch</h1>
            <input type="text" className="form-name" placeholder="Name" />
            <input type="text" className="form-email" placeholder="Email" />
            <textarea className="form-message" placeholder="Type your message here" />
            <button type="submit" className="form-button">Submit</button>
        </motion.div>
    )
}

export default Contact;