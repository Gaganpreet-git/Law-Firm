import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.upper}>
          <Logo />
          <Navigation />
          <Social />
        </div>
        <div className={styles.lower}>
          <span>© 2020 Acme. All rig</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
