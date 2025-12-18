import React from "react";
import { motion } from "framer-motion";
import styles from "./styles/AboutPage.module.scss";
import ceoImage from "../assets/images/About/CeoImg.webp";
import HeroSec from "../assets/images/About/HeroSec.webp";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const AboutFounderSection = () => {
  return (
    <div className={styles.aboutPage}>
      {/* HERO */}
      <section className={styles.HeroSection}>
        <img src={HeroSec} alt="" />
      </section>

      {/* CEO SECTION */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.top}>
          <motion.div className={styles.left} variants={fadeUp}>
            <span className={styles.kicker}>About the Firm</span>
            <h2>Aarti Suryawanshi</h2>
            <p className={styles.role}>CEO</p>
          </motion.div>

          <motion.div className={styles.right} variants={fadeUp}>
            <p>
              In an era where the world is more connected than ever, we believe
              that education should transcend borders, cultures, and traditional
              boundaries.
            </p>
            <p>
              At Janikk International, we are committed to facilitating
              international admissions in India and creating meaningful
              collaborations worldwide.
            </p>
          </motion.div>
        </div>

        <div className={styles.card}>
          <motion.div className={styles.imageBox} variants={imageAnim}>
            <div className={styles.imagePlaceholder}>
              <img src={ceoImage} alt="Aarti Suryawanshi" loading="lazy" />
            </div>
          </motion.div>

          <motion.div className={styles.cardContent} variants={fadeUp}>
            <p>
              Our vision is to create a common platform where students,
              educators, and institutions can collaborate globally.
            </p>
            <p>Janikk International is here to support you on your journey.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* MANAGER SECTION */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.top}>
          <motion.div className={styles.left} variants={fadeUp}>
            <h2>Pooja Thorat</h2>
            <p className={styles.role}>Manager</p>
          </motion.div>

          <motion.div className={styles.right} variants={fadeUp}>
            <p>
              Welcome to Janikk International Global Education Services, your
              gateway to global education.
            </p>
            <p>
              We empower students by providing seamless access to international
              education opportunities.
            </p>
          </motion.div>
        </div>

        <div className={styles.card}>
          <motion.div className={styles.imageBox} variants={imageAnim}>
            <div className={styles.imagePlaceholder}>
              <img src={ceoImage} alt="Pooja Thorat" loading="lazy" />
            </div>
          </motion.div>

          <motion.div className={styles.cardContent} variants={fadeUp}>
            <p>
              Our team of experts guides you through every step of international
              education.
            </p>
            <p>
              Let’s work together to make global education accessible to all.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutFounderSection;
