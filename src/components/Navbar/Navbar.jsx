import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.title}>
          Portfolio
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuButton}
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only"></span>
          <svg className={styles.menuIcon} viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`} id="navbar-menu">
          <ul className={styles.menuList}>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => scrollToSection("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
