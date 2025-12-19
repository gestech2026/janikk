import React, { useState, useEffect } from "react";
import styles from "./styles/GWHM.module.scss";

const GWHMPage = () => {
  const [form, setForm] = useState({
    ticket: "",
    email: "",
    mobile: "",
    name: "",
    gender: "",
    dob: "",
    age: "",
    address: "",
    city: "",
    state: "",
    country: "",
    emergencyName: "",
    emergencyNumber: "",
    bloodGroup: "",
    acceptTerms: false,
    acceptDisclaimer: false,
  });

  const [errors, setErrors] = useState({});

  /* ---------- Age Calculation ---------- */
  useEffect(() => {
    if (!form.dob) return;
    const birthDate = new Date(form.dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setForm((prev) => ({ ...prev, age }));
  }, [form.dob]);

  /* ---------- Validation ---------- */
  const validate = () => {
    const e = {};

    if (!form.ticket) e.ticket = "Please select a ticket";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Valid email required";
    if (!/^[6-9]\d{9}$/.test(form.mobile))
      e.mobile = "Enter valid 10-digit mobile number";
    if (!form.name.trim()) e.name = "Participant name is required";
    if (!form.gender) e.gender = "Select gender";
    if (!form.dob) e.dob = "Date of birth required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.emergencyName.trim())
      e.emergencyName = "Emergency contact name required";
    if (!/^[6-9]\d{9}$/.test(form.emergencyNumber))
      e.emergencyNumber = "Valid emergency contact number required";
    if (!form.bloodGroup) e.bloodGroup = "Select blood group";
    if (!form.acceptTerms) e.acceptTerms = "Required";
    if (!form.acceptDisclaimer) e.acceptDisclaimer = "Required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Marathon Registration:", form);
    alert("Registration Successful");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <section className={styles.page}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <header className={styles.header}>
          <h1>Global Women’s Half Marathon</h1>
          <p> Participant Registration Form</p>
        </header>

        {/* ---------- Ticket ---------- */}
        <div className={styles.field}>
          <label>Ticket *</label>
          <select name="ticket" value={form.ticket} onChange={handleChange}>
            <option value="">Select</option>
            <option value="5km">5 KM Run</option> 
            <option value="10km">10 KM Run</option>
            <option value="21km">Half Marathon (21 KM)</option>
          </select>
          {errors.ticket && <span>{errors.ticket}</span>}
        </div>

        {/* ---------- Contact ---------- */}
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Re-check email"
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className={styles.field}>
            <label>Mobile (WhatsApp) *</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="10-digit number only"
            />
            {errors.mobile && <span>{errors.mobile}</span>}
          </div>
        </div>

        {/* ---------- Participant ---------- */}
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Participant Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label>Gender *</label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            {errors.gender && <span>{errors.gender}</span>}
          </div>
        </div>

        {/* ---------- DOB ---------- */}
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
            {errors.dob && <span>{errors.dob}</span>}
          </div>

          <div className={styles.field}>
            <label>Age</label>
            <input type="text" value={form.age} disabled />
          </div>
        </div>

        {/* ---------- Address ---------- */}
        <div className={styles.field}>
          <label>Area / Address *</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          {errors.address && <span>{errors.address}</span>}
        </div>

        <div className={styles.grid}>
          <div className={styles.field}>
            <label>City *</label>
            <input name="city" value={form.city} onChange={handleChange} />
            {errors.city && <span>{errors.city}</span>}
          </div>

          <div className={styles.field}>
            <label>State</label>
            <input name="state" value={form.state} onChange={handleChange} />
          </div>
        </div>

        {/* ---------- Emergency ---------- */}
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Emergency Contact Name *</label>
            <input
              name="emergencyName"
              value={form.emergencyName}
              onChange={handleChange}
            />
            {errors.emergencyName && <span>{errors.emergencyName}</span>}
          </div>

          <div className={styles.field}>
            <label>Emergency Contact Number *</label>
            <input
              name="emergencyNumber"
              value={form.emergencyNumber}
              onChange={handleChange}
            />
            {errors.emergencyNumber && <span>{errors.emergencyNumber}</span>}
          </div>
        </div>

        {/* ---------- Blood ---------- */}
        <div className={styles.field}>
          <label>Blood Group *</label>
          <select
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
          {errors.bloodGroup && <span>{errors.bloodGroup}</span>}
        </div>

        {/* ---------- Checkboxes ---------- */}
        <div className={styles.checks}>
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={form.acceptTerms}
              onChange={handleChange}
            />
            I agree to Terms, Privacy Policy & Cancellation Policy
          </label>

          <label>
            <input
              type="checkbox"
              name="acceptDisclaimer"
              checked={form.acceptDisclaimer}
              onChange={handleChange}
            />
            I have read the Disclaimer and agree
          </label>
        </div>

        <button className={styles.submit}>Proceed</button>
      </form>
    </section>
  );
};

export default GWHMPage;
