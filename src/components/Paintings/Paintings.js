import "./Paintings.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css";
import { pageVariants, pageTransition } from "./../../animations.js";
import { ModalFooter } from "react-bootstrap";

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
      <Modal size="lg" show={isVisible} onHide={handleModalClose} className="modal">
        <Modal.Body>
          <img src={imgPath} alt="Matanel" className="modalImage"/>
        </Modal.Body>
        <ModalFooter>Think of me, 2004, Oil on Canvas, 80 X 100 cm</ModalFooter>
      </Modal>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div class="row1">
          <div class="column1">
            <img src="/assets/paintings/a-womans-pray.jpeg" alt="A Woman's Pray" onClick={() => handleModalOpen("/assets/paintings/a-womans-pray.jpeg")}/>
          </div>
          <div class="column1">
            <img src="/assets/paintings/think-of-me.jpeg" alt="Think Of Me" onClick={() => handleModalOpen("/assets/paintings/think-of-me.jpeg") }/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/uncerteinity.jpeg" alt="Uncertainity" onClick={() => handleModalOpen("/assets/paintings/uncerteinity.jpeg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/a-dream.jpeg" alt="A Dream" onClick={() => handleModalOpen("/assets/paintings/a-dream.jpeg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/rupture-and-repair.jpeg" alt="Rupture And Repair" onClick={() => handleModalOpen("/assets/paintings/rupture-and-repair.jpeg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/personal-vision.jpeg" alt="Personal Vision" onClick={() => handleModalOpen("/assets/paintings/personal-vision.jpeg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/motherhood.jpeg" alt="Motherhood" onClick={() => handleModalOpen("/assets/paintings/motherhood.jpeg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/all-ways.jpeg" alt="All Ways" onClick={() => handleModalOpen("/assets/paintings/all-ways.jpeg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/the-maiden.jpeg" alt="The Maiden" onClick={() => handleModalOpen("/assets/paintings/the-maiden.jpeg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/3575.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/3575.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/3673.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/3673.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/3675.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/3675.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/8774.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/8774.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/9064.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/9064.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/9130.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/9130.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/11910.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/11910.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/15123.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/16679.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/16719.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}/>
          </div>
          <div className="column1">
            <img src="/assets/paintings/16741.jpg" alt="matanel" onClick={() => handleModalOpen("/assets/paintings/2216.jpg")}/>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Paintings;
