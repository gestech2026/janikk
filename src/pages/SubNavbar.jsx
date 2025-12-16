import React, { useEffect, useRef, useState } from "react";
import styles from "./SubNavbar.module.scss";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "highlights", label: "Highlights" },
  { id: "fees", label: "Participation Fees" },
  { id: "layout", label: "Floor Layout" },
  { id: "contact", label: "Contact" },
];

const SubNavbar = () => {
  const navRef = useRef(null);
  const [active, setActive] = useState("introduction");
  const [isSticky, setIsSticky] = useState(false);

  // Sticky logic
  useEffect(() => {
    const navTop = navRef.current.offsetTop;

    const handleScroll = () => {
      setIsSticky(window.scrollY >= navTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100; // height of sticky navbar
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={navRef}
      className={`${styles.subNavbar} ${isSticky ? styles.sticky : ""}`}
    >
      {sections.map((item) => (
        <button
          key={item.id}
          className={`${styles.tab} ${active === item.id ? styles.active : ""}`}
          onClick={() => scrollToSection(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SubNavbar;
