import "./Paintings.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { pageVariants, pageTransition } from "./../../animations.js";

const Paintings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgPath, setImgPath] = useState("");

  const handleModalOpen = (path) => {
    setIsVisible(true);
    setImgPath(path);
  };
  const handleModalClose = () => setIsVisible(false);

  return (
    <div>
      <Modal show={isVisible} onHide={handleModalClose} className="modal">
        <Modal.Body>
          <img src={imgPath} />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleModalClose}>Close</button>
        </Modal.Footer>
      </Modal>

      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div class="row">
          <div class="column">
            <img
              src="/assets/paintings/2216.jpg"
              alt="Snow"
              onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}
            />
          </div>
          <div class="column">
            <img src="/assets/paintings/2372.jpg" alt="Forest" onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/2435.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2435.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/2458.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2458.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/2542.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2542.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/2544.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2544.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/3065.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/3065.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/3501.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/3501.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/3509.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/3509.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/3575.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/3575.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/3673.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/3673.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/3675.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/3675.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/8774.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/8774.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/9064.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/9064.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/9130.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/9130.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/11910.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/11910.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/15123.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/16679.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/16719.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}/>
          </div>
          <div className="column">
            <img src="/assets/paintings/16741.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}/>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Paintings;
