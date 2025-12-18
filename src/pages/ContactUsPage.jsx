import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles/ContactUs.module.scss";
import img from "../assets/images/About/RightSide.webp";
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ContactHero = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const err = {};
    if (!form.firstName) err.firstName = true;
    if (!form.lastName) err.lastName = true;
    if (!/\S+@\S+\.\S+/.test(form.email)) err.email = true;
    if (!form.message) err.message = true;
    if (!form.agree) err.agree = true;
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Message sent successfully");
  };

  return (
    <section className={styles.ContactUsPage}>
      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* LEFT FORM */}
        <motion.form
          className={styles.formCard}
          variants={fadeUp}
          onSubmit={submit}
        >
          <span className={styles.kicker}>Get in Touch</span>
          <h1>Let's Chat, Reach Out to Us</h1>
          <p className={styles.subtitle}>
            Have questions or feedback? Send us a message and we’ll respond
            within 24 hours.
          </p>

          <div className={styles.row}>
            <input
              placeholder="First name"
              name="firstName"
              onChange={handleChange}
              className={errors.firstName ? styles.error : ""}
            />
            <input
              placeholder="Last name"
              name="lastName"
              onChange={handleChange}
              className={errors.lastName ? styles.error : ""}
            />
          </div>

          <input
            placeholder="Email address"
            name="email"
            onChange={handleChange}
            className={errors.email ? styles.error : ""}
          />

          <textarea
            placeholder="Leave us message"
            rows="4"
            name="message"
            onChange={handleChange}
            className={errors.message ? styles.error : ""}
          />

          <label className={styles.checkbox}>
            <input type="checkbox" name="agree" onChange={handleChange} />I
            agree to our friendly privacy policy
          </label>

          <button type="submit">Send Message</button>
        </motion.form>

        {/* RIGHT PANEL */}
        <motion.div className={styles.rightPanel} variants={fadeUp}>
          <div className={styles.imageBox}>
            <img src={img} alt="" />
          </div>

          <div className={styles.contactCard}>
            <div>
              <strong>Email</strong>
              <p>techteam@kawruh.com</p>
            </div>
            <div>
              <strong>Phone</strong>
              <p>(0252) 8324 9231</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
