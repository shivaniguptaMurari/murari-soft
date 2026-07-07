import React from "react";
import { NavLink } from "react-router-dom";
import { styles } from "../theme";

export default function Header() {
  const linkStyle = ({ isActive }) =>
    isActive ? { ...styles.navLink, ...styles.navLinkActive } : styles.navLink;

  return (
    <header style={styles.header}>
      <div style={styles.brandRow}>
        <div style={styles.crest}>MSS</div>
        <div>
          <div style={styles.brandName}>MurariSoft Solutions</div>
          <div style={styles.brandSub}>Pvt. Ltd.</div>
        </div>
      </div>

      <nav style={styles.nav}>
        <NavLink to="/" style={linkStyle} end>
          <span style={styles.navIcon}>⌂</span>
          Home
        </NavLink>
        <div style={styles.navDivider} />
        <NavLink to="/about" style={linkStyle}>
          <span style={styles.navIcon}>☖</span>
          About us
        </NavLink>
         <NavLink to="/technology" style={linkStyle}>
          <span style={styles.navIcon}>☖</span>
          Technology
        </NavLink>
      </nav>
    </header>
  );
}
