import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, round }) => {
  const classes = `${round ? styles.btnRound : styles.btn}`;
  return <button className={classes}>{children}</button>;
};

export default Button;
