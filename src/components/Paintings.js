import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css";
import { pageVariants, pageTransition } from "../animations.js";
import { ModalFooter } from "react-bootstrap";
import { motion } from "framer-motion";
import useFirestore from "../hooks/useFirestore.js";

const Paintings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgPath, setImgPath] = useState("");

  const { docs } = useFirestore("images");

  const handleModalOpen = (path) => {
    setIsVisible(true);
    setImgPath(path);
  };

  const handleModalClose = () => setIsVisible(false);
  
  const getFileNameFromUrl = (url) => {
    const startIndex = url.lastIndexOf('/') + 1;
    const endIndex = url.indexOf('?');

    if (startIndex === -1 || endIndex === -1) {
      return null; // URL format is invalid
    }

    const fileNameWithExtension = url.substring(startIndex, endIndex);
    const fileNameWithoutExtension = fileNameWithExtension.split('.').slice(0, -1).join('.');
  
    return fileNameWithoutExtension;
  }

  const fileName = getFileNameFromUrl(imgPath);

  return (
    <div>
      <Modal size="lg" show={isVisible} onHide={handleModalClose} className="modal">
        <Modal.Body>
          <img src={imgPath} alt={fileName} className="modal-image"/>
        </Modal.Body>
        <ModalFooter>{fileName}</ModalFooter>
      </Modal>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="row1">
          {docs && docs.map((doc) => {
            return (
              <div className="column1" key={doc.id}>
                <img src={doc.url} onClick={() => handleModalOpen(doc.url)} />
              </div>
            )
          })}
        </div>
        <footer className="copyright-footer">&copy; Copyright 2022</footer>
      </motion.div>
    </div>
  );
};

export default Paintings;
