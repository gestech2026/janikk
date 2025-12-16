import React, { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.scss";
import Logo from "../../assets/logo/logo.png";
import { FiPhone, FiMail, FiInstagram, FiFacebook, FiX } from "react-icons/fi";

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.top}>
        <div className={`${styles.brand} ${styles.reveal}`}>
          <img src={Logo} alt="Janikk International" />
          <p>GLOBAL EDUCATIONAL SERVICES</p>
        </div>

        <div className={`${styles.col} ${styles.reveal}`}>
          <h4>Main Links</h4>
          <a href="/">Home</a>
          <a href="/immersion">Immersion Programme</a>
          <a href="/gallery">Gallery</a>
        </div>

        <div className={`${styles.col} ${styles.reveal}`}>
          <h4>Quick Links</h4>
          <a href="/about">About us</a>
          <a href="/ges">GES</a>
          <a href="/contact">Contact us</a>
        </div>

        <div className={`${styles.col} ${styles.reveal}`}>
          <h4>Location</h4>
          <p>
            Off. no. 16 Audi, Arcade,
            <br />
            Near Lake Town Soc,
            <br />
            Bibewadi, Pune – 411037,
            <br />
            Maharashtra, India
          </p>
        </div>

        <div className={`${styles.col} ${styles.reveal}`}>
          <h4>Contacts</h4>

          <div className={styles.socials}>
            <a>
              <FiInstagram />
            </a>
            <a>
              <FiFacebook />
            </a>
            <a>
              <FiX />
            </a>
          </div>

          <div className={styles.contactItem}>
            <FiPhone />
            <span>
              +91 8459865102 <br />
              +91 8698476373
            </span>
          </div>

          <div className={styles.contactItem}>
            <FiMail />
            <span>
              info.ges@janikkintl.in <br />
              janikkintl@gmail.com
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.bottom} ${styles.revealBottom}`}>
        <span>
          ©2026 All rights reserved by <strong>Janikk International</strong>
        </span>
        <span>
          Maintained by <strong>Haraay Design Studio</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
