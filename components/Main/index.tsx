import React from "react";
import { CgArrowUpR } from "react-icons/cg";

import Skills from "../Skills";
import Projects from "../Projects";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import useScroll from "../../hooks/useScroll";

import styles from "./styles.module.css";

const Main: React.FC = () => {
  const { shouldScrollToTop, scrollToTop } = useScroll();

  return (
    <main className={styles.skills_container}>
      {shouldScrollToTop && (
        <div className={styles.scroll_top} onClick={() => scrollToTop()}>
          <CgArrowUpR size={50} />
        </div>
      )}

      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  );
};

export default Main;
