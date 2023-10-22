import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Subscribe Our Newsletter</h2>
        <form action="" className={styles.form}>
          <input className={styles.text} type="text" placeholder="Name:" />
          <input
            className={styles.email}
            type="email"
            placeholder="Enter your Email"
          />
          <button className={styles.btn}>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
