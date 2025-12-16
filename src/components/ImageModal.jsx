import React from "react";
import styles from "./ImageModal.module.scss";
import { IoClose, IoArrowBack, IoArrowForward } from "react-icons/io5";

const ImageModal = ({ images, index, setIndex, onClose }) => {
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className={styles.overlay}>
      <button className={styles.close} onClick={onClose}>
        <IoClose />
      </button>

      <button className={styles.prev} onClick={prev}>
        <IoArrowBack />
      </button>

      <img src={images[index]} alt="fullscreen" />

      <button className={styles.next} onClick={next}>
        <IoArrowForward />
      </button>
    </div>
  );
};

export default ImageModal;
