import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./../../animations.js";

const Contact = () => {
    return (
        <motion.div
            className="container"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <h1>Contact</h1>
        </motion.div>
    )
}

export default Contact;