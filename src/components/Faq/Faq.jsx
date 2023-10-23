import React from "react";
import styles from "./Faq.module.css";
import Accordian from "../Accordian/Accordian";
const Faq = () => {
  const accordianData = [
    {
      heading: "Do I need a personal injury report?",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      open: true,
    },
    {
      heading: "How much is my case worth?",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      open: false,
    },
    {
      heading: "What should I do right after car accidect",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      open: false,
    },
    {
      heading: "How much is my case worth?",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      open: false,
    },
  ];
  return (
    <div className={styles.faq}>
      <div className={styles.heading}>FAQ</div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
        </div>
        <div className={styles.right}>
          {accordianData.map((accordian, idx) => {
            return (
              <Accordian
                open={accordian.open}
                key={idx}
                heading={accordian.heading}
                description={accordian.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
