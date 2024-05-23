import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jyothi Krishna</h1>
        <p className={styles.description}>
        Full stack web development involves creating dynamic user interfaces with HTML, CSS, and JavaScript, using frameworks like React. It ensures seamless interaction with backend services for a complete, responsive user experience. This role combines both frontend and backend skills to build fully functional web applications.
        </p>
        <a href="mailto:jyothikrishnaavutu@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/heero-min.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
