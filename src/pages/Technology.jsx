import React from "react";
import { styles } from "../theme";
import {
  FaJava,
  FaPython,
  FaDocker,
  FaAws,
  FaReact,
} from "react-icons/fa";

import {
  SiDotnet,
  SiGooglecloud,
  SiKubernetes,
  SiApachekafka,
} from "react-icons/si";

// Lightweight inline icon badges so we don't need an icon-library dependency.
// Each icon is a simple circular monogram in the brand gold, consistent with
// the rest of the theme (goldRule, tag, card accents, etc).

const techIconStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "16px",
    marginTop: "16px",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "18px 12px",
    borderRadius: "14px",
    border: "1px solid rgba(212, 175, 55, 0.25)",
    background: "rgba(212, 175, 55, 0.04)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  badge: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(212,175,55,0.08)",
    border: "2px solid #D4AF37",
    color: "#D4AF37",
    fontSize: "30px",
    boxShadow: "0 4px 10px rgba(212,175,55,0.2)",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    color: "inherit",
    textAlign: "center",
  },
  categoryBlock: {
    marginTop: "36px",
  },
  categoryTitle: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "4px",
  },
  categorySub: {
    fontSize: "13px",
    opacity: 0.75,
    marginBottom: "4px",
  },
};

const TechBadge = ({ label, icon: Icon }) => (
  <div style={techIconStyles.item}>
    <div style={techIconStyles.badge}>
      <Icon />
    </div>
    <span style={techIconStyles.label}>{label}</span>
  </div>
);

const techCategories = [
  {
    title: "Languages & Frameworks",
    items: [
      { label: "Java", icon: FaJava },
      { label: ".NET", icon: SiDotnet },
      { label: "Python", icon: FaPython },
      { label: "Full Stack", icon: FaReact },
    ],
  },
  {
    title: "Cloud",
    items: [
      { label: "AWS", icon: FaAws },
      { label: "GCP", icon: SiGooglecloud },
    ],
  },
  {
    title: "DevOps",
    items: [
      { label: "Docker", icon: FaDocker },
      { label: "Kubernetes", icon: SiKubernetes },
    ],
  },
  {
    title: "Messaging Tools",
    items: [
      { label: "Kafka", icon: SiApachekafka },
    ],
  },
];

export default function Technology() {
  return (
    <section style={styles.aboutSection}>
      <p style={styles.eyebrow}>Our stack</p>
      <h1 style={styles.heroTitle}>Technologies we work with</h1>
      <div style={styles.goldRule} />

      <p style={styles.aboutText}>
        At MurariSoft Solutions, we build on a modern, proven technology
        stack that spans languages, cloud platforms, DevOps tooling, and
        messaging systems — giving our clients the flexibility to choose the
        right tools for every project.
      </p>

      {techCategories.map((category) => (
        <div key={category.title} style={techIconStyles.categoryBlock}>
          <div style={styles.blockTitle}>{category.title}</div>
         <div style={techIconStyles.grid}>
        {category.items.map((item) => (
          <TechBadge
            key={item.label}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
        </div>
      ))}

      <div style={styles.tagWrap}>
        {[
          "Java",
          ".NET",
          "Python",
          "Full Stack",
          "AWS",
          "GCP",
          "Docker",
          "Kubernetes",
          "Kafka",
        ].map((tag) => (
          <span key={tag} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
