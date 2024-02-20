import React from "react";
import Image from "next/image";

import { SectionContext } from "../../context/LinkContext";
import { useContext } from "react";

import styles from "./styles.module.css";

const AboutMe: React.FC = () => {
  const { aboutMeRef } = useContext(SectionContext);

  return (
    <main className={styles.main} ref={aboutMeRef}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.image_paragraph_container}>
        <Image
          src="/chris.jpg"
          width={200}
          height={200}
          alt="Picture of the author"
          className={styles.image}
        />
        <div className="content">
          <p className={styles.paragraph}>
            I&apos;m a devoted husband and father who enjoys cooking, reading
            and running. I taught for my entire professional life and enjoyed
            it, but found my first professional passion when I discovered web
            development.
          </p>
          <p className={styles.paragraph}>
            It all started when I decided I wanted an English grammar website to
            help my students. I asked a couple of my students (who were front
            end developers) to build it. When I saw what they were doing I
            immediately was fascinated by it. After learning a little myself I
            decided it was going to be my next career.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
