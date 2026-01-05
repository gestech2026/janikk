import React, { useState, useEffect } from "react";

const ticketPrices = {
  "3km": 300,
  "5km": 500,
  "10km": 800,
  "21km": 1000,
};

const tshirtSizes = [
  "28",
  "30",
  "32",
  "34",
  "XS 36",
  "S 38",
  "M 40",
  "L 42",
  "XL 44",
  "2XL 46",
  "3XL 48",
  "4XL 50",
];

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const GWHMPage = () => {
  const [form, setForm] = useState({
    ticket: "",
    tshirtSize: "",
    participantType: "individual",
    totalAmount: 0,
    email: "",
    mobile: "",
    name: "",
    gender: "Female",
    dob: "",
    age: "",
    address: "",
    city: "",
    state: "",
    country: "",
    emergencyName: "",
    emergencyNumber: "",
    bloodGroup: "",
    acceptDisclaimer: false,
  });

  const [errors, setErrors] = useState({});
  const [showDeclaration, setShowDeclaration] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isSmall = windowWidth <= 480;

  /* ---------- Age Calculation ---------- */
  useEffect(() => {
    if (!form.dob) return;
    const birthDate = new Date(form.dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    setForm((prev) => ({ ...prev, age }));
  }, [form.dob]);

  /* ---------- Total Amount ---------- */
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      totalAmount: ticketPrices[prev.ticket] || 0,
    }));
  }, [form.ticket]);

  /* ---------- Handlers ---------- */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email is invalid";
    if (!form.mobile.trim()) e.mobile = "Mobile is required";
    else if (!/^\d{10}$/.test(form.mobile))
      e.mobile = "Mobile must be 10 digits";
    if (!form.dob) e.dob = "Date of birth is required";
    if (!form.ticket) e.ticket = "Please select a ticket";
    if (!form.tshirtSize) e.tshirtSize = "Please select T-shirt size";
    if (!form.emergencyName.trim())
      e.emergencyName = "Emergency contact name is required";
    if (!form.emergencyNumber.trim())
      e.emergencyNumber = "Emergency number is required";
    else if (!/^\d{10}$/.test(form.emergencyNumber))
      e.emergencyNumber = "Must be 10 digits";
    if (!form.bloodGroup) e.bloodGroup = "Please select blood group";
    if (!form.acceptDisclaimer)
      e.acceptDisclaimer = "You must accept the disclaimer";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleProceed = () => {
    if (validate()) {
      setShowDeclaration(true);
    }
  };

  const handleFinalSubmit = () => {
    setShowDeclaration(false);
    console.log("FINAL DATA:", form);
    alert("Registration Successful! 🎉");
  };

  const getStyles = () => ({
    page: {
      padding: "2rem",

      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #fdf2f7 0%, #fce4ec 50%, #ffffff 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: isMobile ? "1rem 0.5rem" : "2rem 1rem",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
    },
    card: {
      paddingTop: "30px",
      marginTop: "120px",
      background: "#fff",
      width: "100%",
      maxWidth: "820px",
      borderRadius: isMobile ? "12px" : "20px",
      padding: isMobile ? (isSmall ? "1.25rem" : "1.5rem") : "2.5rem",
      // boxShadow: "0 20px 60px rgba(216, 27, 96, 0.15)",
      margin: isMobile ? "0.5rem" : "0",
    },
    header: {
      textAlign: "center",
      marginBottom: isMobile ? "1.5rem" : "2.5rem",
      paddingBottom: isMobile ? "1rem" : "1.5rem",
      borderBottom: "2px solid #fce4ec",
    },
    headerTitle: {
      color: "#d81b60",
      fontSize: isSmall ? "1.3rem" : isMobile ? "1.5rem" : "2rem",
      margin: "0 0 0.5rem 0",
      fontWeight: "700",
      lineHeight: "1.3",
    },
    headerSubtitle: {
      fontSize: isSmall ? "0.8rem" : isMobile ? "0.85rem" : "0.95rem",
      color: "#666",
      margin: 0,
      lineHeight: "1.4",
    },
    sectionTitle: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: "600",
      color: "#d81b60",
      margin: isMobile ? "1.5rem 0 0.75rem 0" : "2rem 0 1rem 0",
      paddingBottom: "0.5rem",
      borderBottom: "2px solid #fce4ec",
    },
    field: {
      display: "flex",
      flexDirection: "column",
      marginBottom: isMobile ? "1rem" : "1.5rem",
    },
    label: {
      fontSize: isSmall ? "0.8rem" : "0.875rem",
      fontWeight: "500",
      marginBottom: "0.5rem",
      color: "#333",
    },
    input: {
      padding: isMobile ? "10px 12px" : "12px 16px",
      borderRadius: "10px",
      border: "2px solid #e0e0e0",
      fontSize: isSmall ? "0.875rem" : "0.95rem",
      transition: "all 0.3s ease",
      fontFamily: "inherit",
      width: "100%",
      boxSizing: "border-box",
    },
    required: {
      color: "#d32f2f",
      fontWeight: "600",
    },
    errorInput: {
      borderColor: "#d32f2f",
      backgroundColor: "#ffebee",
    },
    errorText: {
      fontSize: isSmall ? "0.7rem" : "0.75rem",
      color: "#d32f2f",
      marginTop: "0.25rem",
      display: "block",
    },
    disabledInput: {
      padding: isMobile ? "10px 12px" : "12px 16px",
      borderRadius: "10px",
      border: "2px solid #e0e0e0",
      fontSize: isSmall ? "0.875rem" : "0.95rem",
      backgroundColor: "#f5f5f5",
      cursor: "not-allowed",
      color: "#666",
      width: "100%",
      boxSizing: "border-box",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: isMobile ? "1rem" : "1.5rem",
    },
    radioGroup: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: isMobile ? "0.75rem" : "1rem",
      marginTop: "0.5rem",
    },
    radioLabel: {
      display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      cursor: "pointer",
      // padding: isMobile ? "0.875rem 1rem" : "1rem 1.25rem",
      // border: "2px solid #e0e0e0",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      fontSize: isSmall ? "0.875rem" : "0.95rem",
      fontWeight: "500",
      position: "relative",
      backgroundColor: "#fff",
    },
    radioLabelActive: {
      borderColor: "#d81b60",
      // backgroundColor: "#fdf2f7",
      fontWeight: "600",
      // boxShadow: "0 2px 8px rgba(216, 27, 96, 0.15)",
    },
    radioInput: {
      width: "20px",
      height: "20px",
      marginRight: "0.625rem",
      cursor: "pointer",
      accentColor: "#d81b60",
      flexShrink: 0,
    },
    totalAmount: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "1rem" : "1.5rem",
      background: "linear-gradient(135deg, #d81b60, #ff4081)",
      borderRadius: "12px",
      margin: isMobile ? "1.5rem 0 1rem 0" : "2rem 0 1.5rem 0",
      boxShadow: "0 4px 15px rgba(216, 27, 96, 0.3)",
      flexWrap: "wrap",
      gap: "0.5rem",
    },
    totalLabel: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: "500",
      color: "#fff",
    },
    totalValue: {
      fontSize: isMobile ? "1.5rem" : "1.8rem",
      fontWeight: "700",
      color: "#fff",
    },
    checkboxLabel: {
      display: "flex",
      alignItems: "flex-start",
      gap: "0.75rem",
      margin: isMobile ? "1rem 0" : "1.5rem 0",
      cursor: "pointer",
      padding: isMobile ? "0.75rem" : "1rem",
      borderRadius: "10px",
      transition: "background-color 0.3s ease",
    },
    checkboxInput: {
      marginTop: "0.25rem",
      cursor: "pointer",
      minWidth: "18px",
      width: "18px",
      height: "18px",
      accentColor: "#d81b60",
      flexShrink: 0,
    },
    checkboxText: {
      fontSize: isSmall ? "0.8rem" : isMobile ? "0.85rem" : "0.9rem",
      color: "#555",
      lineHeight: "1.5",
    },
    submitBtn: {
      width: "100%",
      padding: isMobile ? "0.875rem" : "1rem",
      border: "none",
      borderRadius: "12px",
      background: "linear-gradient(90deg, #d81b60, #ff4081)",
      color: "#fff",
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(216, 27, 96, 0.3)",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      padding: isMobile ? "0.5rem" : "1rem",
    },
    modal: {
      background: "#fff",
      borderRadius: isMobile ? "12px" : "20px",
      maxWidth: "600px",
      width: "100%",
      maxHeight: "90vh",
      overflowY: "auto",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "1rem 1.25rem" : "1.5rem 2rem",
      borderBottom: "2px solid #fce4ec",
      position: "sticky",
      top: 0,
      backgroundColor: "#fff",
      zIndex: 1,
    },
    modalTitle: {
      margin: 0,
      fontSize: isSmall ? "1.2rem" : isMobile ? "1.3rem" : "1.5rem",
      color: "#d81b60",
      lineHeight: "1.3",
    },
    closeBtn: {
      background: "none",
      border: "none",
      fontSize: isMobile ? "1.75rem" : "2rem",
      color: "#666",
      cursor: "pointer",
      width: isMobile ? "36px" : "40px",
      height: isMobile ? "36px" : "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      flexShrink: 0,
      marginLeft: "0.5rem",
    },
    modalBody: {
      padding: isMobile ? "1.25rem" : "2rem",
    },
    declarationList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    declarationItem: {
      padding: isMobile ? "0.75rem" : "1rem",
      marginBottom: "0.75rem",
      backgroundColor: "#fdf2f7",
      borderRadius: "10px",
      fontSize: isSmall ? "0.85rem" : isMobile ? "0.9rem" : "0.95rem",
      lineHeight: "1.6",
      color: "#333",
      borderLeft: "4px solid #d81b60",
    },
    modalFooter: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row",
      gap: "1rem",
      padding: isMobile ? "1.25rem" : "1.5rem 2rem",
      borderTop: "2px solid #fce4ec",
      position: "sticky",
      bottom: 0,
      backgroundColor: "#fff",
    },
    cancelBtn: {
      flex: 1,
      padding: isMobile ? "0.75rem" : "0.875rem",
      border: "none",
      borderRadius: "10px",
      fontSize: isMobile ? "0.95rem" : "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backgroundColor: "#f5f5f5",
      color: "#666",
    },
    agreeBtn: {
      flex: 1,
      padding: isMobile ? "0.75rem" : "0.875rem",
      border: "none",
      borderRadius: "10px",
      fontSize: isMobile ? "0.95rem" : "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      background: "linear-gradient(90deg, #d81b60, #ff4081)",
      color: "#fff",
      boxShadow: "0 4px 15px rgba(216, 27, 96, 0.3)",
    },
  });

  const styles = getStyles();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Global Women's Half Marathon</h1>
          <p style={styles.headerSubtitle}>
            Join us in celebrating women's strength and endurance
          </p>
        </div>

        <div>
          {/* Participant Details */}
          <div style={styles.sectionTitle}>Participant Details</div>

          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>
                Participant Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{
                  ...styles.input,
                  ...(errors.name && styles.errorInput),
                }}
              />
              {errors.name && (
                <span style={styles.errorText}>{errors.name}</span>
              )}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Gender</label>
              <input value="Female" disabled style={styles.disabledInput} />
            </div>
          </div>

          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>
                Email <span style={styles.required}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                style={{
                  ...styles.input,
                  ...(errors.email && styles.errorInput),
                }}
              />
              {errors.email && (
                <span style={styles.errorText}>{errors.email}</span>
              )}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                Mobile Number <span style={styles.required}>*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                maxLength="10"
                style={{
                  ...styles.input,
                  ...(errors.mobile && styles.errorInput),
                }}
              />
              {errors.mobile && (
                <span style={styles.errorText}>{errors.mobile}</span>
              )}
            </div>
          </div>

          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>
                Date of Birth <span style={styles.required}>*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                style={{
                  ...styles.input,
                  ...(errors.dob && styles.errorInput),
                }}
              />
              {errors.dob && <span style={styles.errorText}>{errors.dob}</span>}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Age</label>
              <input
                value={form.age || "Auto-calculated"}
                disabled
                style={styles.disabledInput}
              />
            </div>
          </div>

          {/* Race Details */}
          <div style={styles.sectionTitle}>Race Details</div>

          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>
                Select Distance <span style={styles.required}>*</span>
              </label>
              <select
                name="ticket"
                value={form.ticket}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(errors.ticket && styles.errorInput),
                }}
              >
                <option value="">Choose your race distance</option>
                <option value="3km">3 KM - Fun Run (₹300)</option>
                <option value="5km">5 KM - Mini Marathon (₹500)</option>
                <option value="10km">10 KM - Challenge (₹800)</option>
                <option value="21km">21 KM - Half Marathon (₹1000)</option>
              </select>
              {errors.ticket && (
                <span style={styles.errorText}>{errors.ticket}</span>
              )}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                T-Shirt Size <span style={styles.required}>*</span>
              </label>
              <select
                name="tshirtSize"
                value={form.tshirtSize}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(errors.tshirtSize && styles.errorInput),
                }}
              >
                <option value="">Select your size</option>
                {tshirtSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              {errors.tshirtSize && (
                <span style={styles.errorText}>{errors.tshirtSize}</span>
              )}
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Registration Type</label>
            <div style={styles.radioGroup}>
              <label
                style={{
                  ...styles.radioLabel,
                  ...(form.participantType === "individual" &&
                    styles.radioLabelActive),
                }}
              >
                <input
                  type="radio"
                  name="participantType"
                  value="individual"
                  checked={form.participantType === "individual"}
                  onChange={handleChange}
                  style={styles.radioInput}
                />
                <span>Individual</span>
              </label>

              <label
                style={{
                  ...styles.radioLabel,
                  ...(form.participantType === "corporate" &&
                    styles.radioLabelActive),
                }}
              >
                <input
                  type="radio"
                  name="participantType"
                  value="corporate"
                  checked={form.participantType === "corporate"}
                  onChange={handleChange}
                  style={styles.radioInput}
                />
                <span>Corporate</span>
              </label>
            </div>
          </div>

          {/* Emergency Contact */}
          <div style={styles.sectionTitle}>Emergency Contact</div>

          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>
                Contact Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="emergencyName"
                value={form.emergencyName}
                onChange={handleChange}
                placeholder="Emergency contact name"
                style={{
                  ...styles.input,
                  ...(errors.emergencyName && styles.errorInput),
                }}
              />
              {errors.emergencyName && (
                <span style={styles.errorText}>{errors.emergencyName}</span>
              )}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                Contact Number <span style={styles.required}>*</span>
              </label>
              <input
                type="tel"
                name="emergencyNumber"
                value={form.emergencyNumber}
                onChange={handleChange}
                placeholder="10-digit number"
                maxLength="10"
                style={{
                  ...styles.input,
                  ...(errors.emergencyNumber && styles.errorInput),
                }}
              />
              {errors.emergencyNumber && (
                <span style={styles.errorText}>{errors.emergencyNumber}</span>
              )}
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>
              Blood Group <span style={styles.required}>*</span>
            </label>
            <select
              name="bloodGroup"
              value={form.bloodGroup}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.bloodGroup && styles.errorInput),
              }}
            >
              <option value="">Select your blood group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
            {errors.bloodGroup && (
              <span style={styles.errorText}>{errors.bloodGroup}</span>
            )}
          </div>

          {/* Total Amount */}
          <div style={styles.totalAmount}>
            <div style={styles.totalLabel}>Registration Fee:</div>
            <div style={styles.totalValue}>₹ {form.totalAmount}</div>
          </div>

          {/* Disclaimer */}
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="acceptDisclaimer"
              checked={form.acceptDisclaimer}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>
              I have read and agree to the{" "}
              <strong style={{ color: "#d81b60" }}>
                Terms, Conditions & Disclaimer
              </strong>
            </span>
          </label>
          {errors.acceptDisclaimer && (
            <span style={styles.errorText}>{errors.acceptDisclaimer}</span>
          )}

          <button
            type="button"
            style={styles.submitBtn}
            onClick={handleProceed}
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      {/* Declaration Modal */}
      {showDeclaration && (
        <div
          style={styles.modalOverlay}
          onClick={() => setShowDeclaration(false)}
        >
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Declaration & Consent</h3>
              <button
                style={styles.closeBtn}
                onClick={() => setShowDeclaration(false)}
              >
                ×
              </button>
            </div>

            <div style={styles.modalBody}>
              <ul style={styles.declarationList}>
                <li style={styles.declarationItem}>
                  ✓ I confirm that I meet the age eligibility criteria for the
                  selected race category
                </li>
                <li style={styles.declarationItem}>
                  ✓ I am medically fit and participating in this event at my own
                  risk
                </li>
                <li style={styles.declarationItem}>
                  ✓ I understand that registration fees are non-refundable and
                  non-transferable
                </li>
                <li style={styles.declarationItem}>
                  ✓ I agree to abide by all race rules, regulations, and
                  guidelines
                </li>
                <li style={styles.declarationItem}>
                  ✓ I consent to the use of my photographs and videos taken
                  during the event
                </li>
                <li style={styles.declarationItem}>
                  ✓ I release the organizers from any liability arising from my
                  participation
                </li>
              </ul>
            </div>

            <div style={styles.modalFooter}>
              <button
                style={styles.cancelBtn}
                onClick={() => setShowDeclaration(false)}
              >
                Cancel
              </button>
              <button style={styles.agreeBtn} onClick={handleFinalSubmit}>
                I Agree & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GWHMPage;
