import React from "react";
import styles from "./Carousel.module.css";
import { ReactComponent as PrevIcon } from "../../assets/icons/icon-prev.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/icon-next.svg";

const Carousel = ({ heading, children, data }) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.upper}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.navigation}>
          <div className={styles.btn}>
            <PrevIcon />
          </div>
          <div className={styles.btn}>
            <NextIcon />
          </div>
        </div>
      </div>
      <div className={styles.content}>{data}</div>
    </div>
  );
};

export default Carousel;
