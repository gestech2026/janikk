import React, { useState } from "react";
import styles from "./styles/StudentRegistration.module.scss";
import StallBooking from "../components/StallBooking";
const ExhibitorsRegistration = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    contact: "",
    organization: "",
    stallNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [showStallBook, setShowStallBook] = useState(false);
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.surname.trim()) {
      newErrors.surname = "Surname is required";
    }

    if (!form.email) {
      newErrors.email = "E-mail is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid e-mail";
    }

    if (!form.contact) {
      newErrors.contact = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(form.contact)) {
      newErrors.contact = "Enter valid 10-digit number";
    }

    if (!form.organization.trim()) {
      newErrors.organization =
        "University / Institute or Company name is required";
    }

    if (!form.stallNumber.trim()) {
      newErrors.stallNumber = "Stall number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Exhibitor Registration:", form);
    alert("Exhibitor Registered Successfully");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className={styles.overlay}>
      <form className={styles.card} onSubmit={handleSubmit} noValidate>
        {/* Header */}
        <div className={styles.header}>
          <span>Contact Us Register for</span>
          <h1>Global Education Summit 2026</h1>
        </div>

        {/* Description */}
        <p className={styles.description}>
          Register as an University/ Institute for GES 2026. Share your
          institution, organization, or company with educators, students, and
          global leaders.
        </p>

        <div className={styles.sectionTitle}>
          {" "}
          University/Institute Details:
        </div>

        {/* Form Fields */}
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label>Surname *</label>
            <input
              type="text"
              name="surname"
              placeholder="Enter surname"
              value={form.surname}
              onChange={handleChange}
            />
            {errors.surname && (
              <span className={styles.error}>{errors.surname}</span>
            )}
          </div>

          <div className={styles.field}>
            <label>E-mail *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter e-mail address"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          <div className={styles.field}>
            <label>Contact *</label>
            <input
              type="tel"
              name="contact"
              placeholder="Enter contact number"
              value={form.contact}
              onChange={handleChange}
            />
            {errors.contact && (
              <span className={styles.error}>{errors.contact}</span>
            )}
          </div>

          <div className={styles.field}>
            <label>University / Institute or Company *</label>
            <input
              type="text"
              name="organization"
              placeholder="Enter organization name"
              value={form.organization}
              onChange={handleChange}
            />
            {errors.organization && (
              <span className={styles.error}>{errors.organization}</span>
            )}
          </div>

          <div className={styles.field}>
            <label>Stall Number *</label>
            <input
              type="text"
              name="stallNumber"
              placeholder="Enter stall number"
              value={form.stallNumber}
              onChange={handleChange}
            />
            {errors.stallNumber && (
              <span className={styles.error}>{errors.stallNumber}</span>
            )}
          </div>
        </div>

        {/* Submit */}
        <button type="button" onClick={() => setShowStallBook(true)}>
          Book Stall
        </button>
        {showStallBook && <StallBooking />}

        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default ExhibitorsRegistration;
