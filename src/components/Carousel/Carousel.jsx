import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { ReactComponent as PrevIcon } from "../../assets/icons/icon-prev.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/icon-next.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const Carousel = ({ heading, children, data }) => {
  const swiper = useSwiper();
  //   const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  //   const prevBtnClasses = `${styles.btn} ${isBeginning ? styles.disabled : ""}`;
  //   useEffect(() => {
  //     swiper.slideTo(0, null);
  //   }, [data]);

  //   useEffect(() => {
  //     swiper.on("slideChange", () => {
  //       setIsBeginning(swiper.isBeginning);
  //     });
  //   }, [swiper]);

  return (
    <div className={styles.carousel}>
      <div className={styles.upper}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.navigation}>
          <div
            className={styles.btn}
            onClick={() => {
              //   swiper.slidePrev();
            }}
          >
            <PrevIcon />
          </div>
          <div
            className={styles.btn}
            onClick={() => {
              //   swiper.slideNext();
            }}
          >
            <NextIcon />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          initialSlide={0}
          modules={[Navigation]}
        >
          {data.map((item) => {
            return <SwiperSlide>{item}</SwiperSlide>;
          })}
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
