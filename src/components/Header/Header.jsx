// // src/components/Header/Header.jsx
// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import styles from "./Header.module.scss";
// import logoImage from "../../assets/logo/logo.png";
// import GESImage from "../../assets/logo/GESLogo.svg";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About us", path: "/about" },
//   { name: "GES", path: "/ges" },
//   { name: "Immersion Programme", path: "/immersion" },
//   { name: "Gallery", path: "/gallery" },
// ];

// const Header = () => {
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMenuOpen]);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className={styles.header}>
//       {/* 1. Logo Section */}
//       <div className={styles.logoContainer}>
//         <Link to="/" onClick={closeMenu}>
//           <img
//             src={logoImage}
//             alt="JANKK International Logo"
//             className={styles.logo}
//           />
//         </Link>
//       </div>

//       {/* 2. Navigation Menu - Desktop */}
//       <nav className={styles.navMenu}>
//         <div className={styles.pillContainer}>
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`${styles.navItem} ${
//                 location.pathname === item.path ||
//                 (item.path !== "/" && location.pathname.startsWith(item.path))
//                   ? styles.active
//                   : ""
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </nav>

//       {/* 3. Apply Now Button - Desktop */}
//       <div className={styles.actionButton}>
//         <Link to="/contact">Contact Us</Link>
//       </div>

//       {/* 4. Mobile Menu Toggle Button */}
//       <button
//         className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
//         onClick={toggleMenu}
//         aria-label="Toggle menu"
//         type="button"
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>

//       {/* 5. Mobile Menu Overlay */}
//       <div
//         className={`${styles.mobileMenuOverlay} ${
//           isMenuOpen ? styles.showOverlay : ""
//         }`}
//         onClick={closeMenu}
//       ></div>

//       {/* 6. Mobile Menu Slider */}
//       <nav
//         className={`${styles.mobileMenu} ${isMenuOpen ? styles.showMenu : ""}`}
//       >
//         <div className={styles.mobileMenuContent}>
//           {navItems.map((item, index) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`${styles.mobileNavItem} ${
//                 location.pathname === item.path ||
//                 (item.path !== "/" && location.pathname.startsWith(item.path))
//                   ? styles.activeLink
//                   : ""
//               } ${isMenuOpen ? styles.animateIn : ""}`}
//               onClick={closeMenu}
//               style={{ animationDelay: `${index * 0.08}s` }}
//             >
//               {item.name}
//             </Link>
//           ))}
//           <Link
//             to="/contact"
//             className={`${styles.mobileActionButton} ${
//               isMenuOpen ? styles.animateIn : ""
//             }`}
//             onClick={closeMenu}
//             style={{ animationDelay: `${navItems.length * 0.08}s` }}
//           >
//             Contact Us
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// src/components/Header/Header.jsx
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import logoImage from "../../assets/logo/logo.png";
import GESLogo from "../../assets/logo/GESLogo.svg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "GES", path: "/ges" },
  { name: "Immersion Programme", path: "/immersion" },
  { name: "Gallery", path: "/gallery" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔹 Detect GES pages
  const isGESPage =
    location.pathname === "/ges" || location.pathname.startsWith("/gesreg");

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* 1. Logo Section */}
      <div className={styles.logoContainer}>
        <Link to="/" onClick={closeMenu}>
          <img
            src={isGESPage ? GESLogo : logoImage}
            alt={isGESPage ? "GES Logo" : "Janikk International Logo"}
            className={styles.logo}
          />
        </Link>
      </div>

      {/* 2. Navigation Menu - Desktop */}
      <nav className={styles.navMenu}>
        <div className={styles.pillContainer}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
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

      {/* 3. Contact Button */}
      <div className={styles.actionButton}>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* 4. Mobile Menu Toggle */}
      <button
        className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      {/* 5. Mobile Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          isMenuOpen ? styles.showOverlay : ""
        }`}
        onClick={closeMenu}
      />

      {/* 6. Mobile Menu */}
      <nav
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.showMenu : ""}`}
      >
        <div className={styles.mobileMenuContent}>
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${styles.mobileNavItem} ${
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path))
                  ? styles.activeLink
                  : ""
              } ${isMenuOpen ? styles.animateIn : ""}`}
              onClick={closeMenu}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className={`${styles.mobileActionButton} ${
              isMenuOpen ? styles.animateIn : ""
            }`}
            onClick={closeMenu}
            style={{ animationDelay: `${navItems.length * 0.08}s` }}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
