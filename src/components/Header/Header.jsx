import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
      <Button>Contact Now</Button>
    </div>
  );
};

export default Header;
