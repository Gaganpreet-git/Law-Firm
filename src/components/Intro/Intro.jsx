import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h2 className={styles.introHeading}>
        Let’s Introduce <br />
        Ourself
      </h2>
      <span className={styles.separator}></span>
      <div className={styles.introDetails}>
        <h3 className={styles.introSubHeading}>Criminal Lawyer</h3>
        <p className={styles.introDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Intro;
