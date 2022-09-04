import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations.js";

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <img
        src="/assets/images/yehudit.png"
        width="500"
        height="500"
        alt="Yeudit Englard"
        className="profile-img"
      />
      <div className="about-content">
        <h1 className="about-title">About Yehudit Englard</h1>
        <p className="about-paragraph">
          Yehudit Englard was born in 1946 in Baghdad, came to Israel five years
          old and began painting in her forties. <br />
          Since than, Englard has worked with increasing intensity, and with an
          uncompromising determination to expand her field of artistic creativity.
          <br /> Her work is closely identified with the contemporary art form known as
          intuitive painting. <br /> Yehudit is an autodidactic artist, free of any
          shackles or preconceptions, <br /> who simply listens to her own internal
          artistic instincts and gives full rein to the inner strengths waiting to
          burst free into individual expression. <br /> "Through the process I rely
          entirely on my feelings, creativity, while constantly giving my all, to
          abstract human emotions and scenery, with a boundless love for the
          world.”​ <br /> "Art can be learnt only partially, whereas the artist needs it
          wholly!" (Goethe) Englard is a member of the Israeli Union of Visual
          Artists, and the Research of Women Art and Gender Association.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
