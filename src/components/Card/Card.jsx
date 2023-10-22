import React from "react";
import styles from "./Card.module.css";

const Card = ({ children, featured }) => {
  const classes = `${styles.card}  ${featured ? styles.featured : ""}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
