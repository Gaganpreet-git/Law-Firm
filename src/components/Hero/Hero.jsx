import React from "react";
import styles from "./Hero.module.css";
import { ReactComponent as HeroImage } from "../assets/hero-img.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroHeading}>
          You don’t have to
          <span className={styles.heroHeadingtHighlight}>
            Fight them Alone.
          </span>
        </h1>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
      </div>
      {/* <input
        type="email"
        className={styles.email}
        placeholder="Enter your email address"
      /> */}
      <HeroImage />
    </div>
  );
};

export default Hero;
