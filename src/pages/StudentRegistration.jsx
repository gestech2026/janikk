import React, { useEffect } from "react";
import styles from "./styles/StudentRegistration.module.scss";

const StudentRegistration = () => {
  useEffect(() => {
    // Dreamcast iframe auto-resize script
    const iframeScript = document.createElement("script");
    iframeScript.src =
      "https://cdn1.godcstatic.com/diy_registration/diy-iframe.min.js";
    iframeScript.async = true;

    // Badge button script
    const badgeScript = document.createElement("script");
    badgeScript.src =
      "https://cdn1.godcstatic.com/diy_registration_staging/preview.js";
    badgeScript.async = true;

    badgeScript.onload = () => {
      // 🔥 Re-initialize Dreamcast M-badge buttons
      if (window.initMBadgeButtons) {
        window.initMBadgeButtons();
      }
    };

    document.body.appendChild(iframeScript);
    document.body.appendChild(badgeScript);

    return () => {
      if (document.body.contains(iframeScript)) {
        document.body.removeChild(iframeScript);
      }
      if (document.body.contains(badgeScript)) {
        document.body.removeChild(badgeScript);
      }
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <span>Contact Us Register for</span>
          <h1>Global Education Summit 2026</h1>
        </div>

        {/* Description */}
        <p className={styles.description}>
          GES 2026 is a landmark event shaping the future of Indian academia at a
          global level. The summit gathers policymakers, educators, researchers,
          and industry leaders.
        </p>

        {/* Dreamcast Registration Iframe */}
        <iframe
          id="childIframe"
          title="Dreamcast Registration"
          allow="camera; microphone"
          src="https://event.godreamcast.com/reg-events/gjdhsp-global-education-summit/gjdoz1?isPvt=1&embed=true&page=embed"
          width="100%"
          frameBorder="0"
          style={{
            borderRadius: "10px",
            minHeight: "400px",
          }}
        />

        {/* Download M-Badge Button */}
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <button
            data-action-id="mbadge-button"
            mbadge-data-url="https://event.godreamcast.com/reg-events/download-badge/gjdhsp-global-education-summit?embed=true"
            className={styles.submitBtn}
          >
            Download your M-badge
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
