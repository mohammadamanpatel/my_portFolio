import React from "react";
import styles from "./Hero.module.css";
import heroimage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${styles.rightSection}`}>
        <img
          src={heroimage}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={`${styles.content} ${styles.leftSection}`}>
        <h1 className={styles.title}>Hi, I'm Aman</h1>
        <p className={styles.description}>
          I'm a skilled full-stack developer specializing in backend technologies like Node.js and Express.js, complemented by proficiency in JavaScript frameworks such as React.js. I excel in building robust web applications with modern UI/UX design and implementing secure authentication mechanisms.
        </p>
        <a
          href={"https://www.linkedin.com/in/mohd-aman-patel/"}
          className={styles.contactBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Connect
        </a>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
