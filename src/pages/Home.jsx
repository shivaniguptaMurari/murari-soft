import React from "react";
import { styles } from "../theme";

export default function Home() {
  return (
    <section style={styles.heroSection}>
      <p style={styles.eyebrow}>Welcome to</p>
      <h1 style={styles.heroTitle}>MurariSoft Solutions Pvt. Ltd.</h1>
      <div style={styles.goldRule} />
      <p style={styles.heroText}>
        Building technology partnerships for a digital future. MSS is a
        growing software services company helping businesses build reliable,
        scalable, and modern technology solutions through skilled
        engineering talent and a customer-first approach. Explore our story
        on the About Us page, or reach out to our team directly below.
      </p>

      <div style={styles.quickContact}>
        <div style={styles.quickItem}>
          <span style={styles.quickLabel}>Call us</span>
          <span style={styles.quickValue}>+91 92178 06488</span>
        </div>
        <div style={styles.quickItem}>
          <span style={styles.quickLabel}>Email us</span>
          <span style={styles.quickValue}>shivani.gupta@murarisoft.com</span>
        </div>
      </div>
    </section>
  );
}
