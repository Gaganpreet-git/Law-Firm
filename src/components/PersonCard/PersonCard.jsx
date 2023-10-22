import React from "react";
import styles from "./PersonCard.module.css";

const PersonCard = ({ image, name, detail, featured }) => {
  const classes = `${styles.container} ${featured ? styles.featured : ""}`;
  return (
    <div className={classes}>
      <img src={image} alt="" />
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.details}>{detail}</div>
      </div>
    </div>
  );
};

export default PersonCard;
