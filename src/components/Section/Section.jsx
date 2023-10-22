import React from "react";
import styles from "./Section.module.css";

const Section = ({ heading, children }) => {
  return (
    <section className={styles.section}>
      <h4 className={styles.heading}>{heading}</h4>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Section;
