import React from "react";
import styles from "./FeatureCard.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { ReactComponent as CardImage } from "../../assets/gift-icon.svg";

const FeatureCard = ({ heading, description, featured }) => {
  return (
    <div className={styles.featureCard}>
      <Card featured={featured}>
        <CardImage />
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.btn}>
          <Button round>Read More</Button>
        </div>
      </Card>
    </div>
  );
};

export default FeatureCard;
