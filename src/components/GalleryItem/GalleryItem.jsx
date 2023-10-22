import React from "react";
import styles from "./GalleryItem.module.css";

const GalleryItem = ({ image, text }) => {
  return (
    <div>
      <div className={styles.img}>
        <img src={image} alt="" />
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default GalleryItem;
