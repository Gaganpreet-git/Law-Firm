import React from "react";
import styles from "./TestimonialCard.module.css";
import Card from "../Card/Card";

const TestimonialCard = ({ image, name, role, description }) => {
  return (
    <Card>
      <div className={styles.wrapper}>
        <img src={image} alt="" />
        <h6 className={styles.heading}>{name}</h6>
        <div className={styles.role}>{role}</div>
        <p className={styles.description}>{description}</p>
      </div>
    </Card>
  );
};

export default TestimonialCard;
