import React, { useState } from "react";
import styles from "./Accordian.module.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/icon-plus.svg";

const Accordian = ({ heading, description, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  const classes = `${styles.accordian} ${isOpen ? styles.removeBorder : ""}`;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes}>
      <div className={styles.heading} onClick={handleToggle}>
        <div> {heading}</div>
        <PlusIcon className={styles.icon} />
      </div>
      {isOpen && <div className={styles.description}>{description}</div>}
    </div>
  );
};

export default Accordian;
