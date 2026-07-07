import React from "react";
import { styles } from "../theme";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} MurariSoft Solutions Pvt. Ltd. All rights reserved.
    </footer>
  );
}
