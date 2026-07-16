import React from "react";
import { styles } from "../theme";

export default function About() {
  return (
    <section style={styles.aboutSection}>
      <p style={styles.eyebrow}>About us</p>
      <h1 style={styles.heroTitle}>The people behind MurariSoft</h1>
      <div style={styles.goldRule} />

      <p style={styles.aboutText}>
        MurariSoft Solutions Pvt. Ltd. (MSS) is a growing software services
        company founded with a simple objective — to help businesses build
        reliable, scalable, and modern technology solutions through skilled
        engineering talent and a customer-first approach. We combine
        technical expertise with agility, enabling us to adapt quickly to
        client requirements and deliver high-quality solutions efficiently.
      </p>

      <p style={styles.aboutTextHighlight}>
       We are a dynamic team of experienced professionals and fresh talent, driven by innovation, 
       collaboration, and a shared commitment to fulfilling our customers' needs with excellence.
      </p>

      <div style={styles.twoCol}>
        <div style={styles.infoBlock}>
          <div style={styles.blockTitle}>Our vision</div>
          <p style={styles.blockText}>
            To establish MSS as a trusted technology partner for businesses
            seeking innovative software solutions and dependable engineering
            support.
          </p>
        </div>
        <div style={styles.infoBlock}>
          <div style={styles.blockTitle}>Our mission</div>
          <ul style={styles.list}>
            <li>Deliver quality-driven software development services</li>
            <li>Build strong and lasting client relationships</li>
            <li>Provide skilled engineering professionals from day one</li>
            <li>Support businesses in digital transformation</li>
            <li>Grow through learning, innovation, and customer success</li>
          </ul>
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.cardBody}>
          <div style={styles.cardName}>Dr. Shivani Gupta</div>
          <div style={styles.cardRole}>Director</div>

          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Contact number</span>
            <span style={styles.infoValue}>+91 92178 06488</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Email</span>
            <span style={styles.infoValue}>softmurari@gmail.com</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>Registered office</span>
            <span style={styles.infoValue}>
              O-1248, Gaur City Centre, Greater Noida – 201318, UP, India
            </span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>CIN</span>
            <span style={styles.infoValue}>U62099UW2026PTC254295</span>
          </div>
        </div>
      </div>

      <div style={styles.tagWrap}>
        {[
          "Custom application development",
          "Enterprise software",
          "Web applications",
          "API & microservices",
          "Cloud & DevOps",
          "Technology consulting",
        ].map((tag) => (
          <span key={tag} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
