import React from "react";
import styles from "./Social.module.css";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as PinterestIcon } from "../../assets/pinterest.svg";

const Social = () => {
  return (
    <div className={styles.container}>
      <InstagramIcon />
      <FacebookIcon />
      <TwitterIcon />
      <PinterestIcon />
    </div>
  );
};

export default Social;
