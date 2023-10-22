import React from "react";
import styles from "./Gallery.module.css";

import businessLawImage from "../../assets/business-law.png";
import partnershipLawImage from "../../assets/partnership-law.png";
import realEstateLawImage from "../../assets/real-estate-law.png";
import businessLaw2Image from "../../assets/business-law-2.png";
import landlordDisputesImage from "../../assets/landlord-disputes.png";
import elderAbuseImage from "../../assets/elder-abuse.png";
import GalleryItem from "../GalleryItem/GalleryItem";

const Gallery = () => {
  const galleryData = [
    { image: businessLawImage, text: "business law" },
    { image: partnershipLawImage, text: "partnership law" },
    { image: realEstateLawImage, text: "real estate law" },
    { image: businessLaw2Image, text: "business law" },
    { image: landlordDisputesImage, text: "landlord disputes" },
    { image: elderAbuseImage, text: "elder abuse" },
  ];
  return (
    <div className={styles.gallery}>
      {galleryData.map((item) => {
        return <GalleryItem image={item.image} text={item.text} />;
      })}
    </div>
  );
};

export default Gallery;
