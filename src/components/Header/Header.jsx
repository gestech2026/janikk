// src/components/Header/Header.jsx
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
// Assuming the logo is saved here. Use an <img> tag for the logo.
import logoImage from "../../assets/logo/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "GES", path: "/ges" },
  { name: "Immersion Programme", path: "/immersion" },
  { name: "Gallery", path: "/gallery" },
  // { name: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      {/* 1. Logo Section */}
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            src={logoImage}
            alt="JANKK International Logo"
            className={styles.logo}
          />
        </Link>
      </div>

      {/* 2. Navigation Menu */}
      <nav className={styles.navMenu}>
        <div className={styles.pillContainer}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              // Check if the current path starts with the item's path for active state
              className={`${styles.navItem} ${
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path))
                  ? styles.active
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* 3. Apply Now Button */}
      <div className={styles.actionButton}>
        <Link to="/contact">Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
