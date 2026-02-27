import React, { useState } from "react";
import { FiInstagram } from "react-icons/fi";
import styles from "./InstagramFloat.module.scss";

const InstagramFloat = () => {
  const [open, setOpen] = useState(false);

  return (
    <a
      href="https://www.instagram.com/global_educationsummit?igsh=ajgzOXRiMzdhYWlq"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.instagram} ${open ? styles.open : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
      aria-label="Follow us on Instagram"
    >
      <FiInstagram />
      <span>Instagram</span>
    </a>
  );
};

export default InstagramFloat;
