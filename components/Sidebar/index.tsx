import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import Container from "@mui/material/Container";

import { useContext } from "react";
import { SectionContext } from "../../context/LinkContext";
import useScroll from "../../hooks/useScroll";

import styles from "./styles.module.css";

const Sidebar = () => {
  const { getInTouchRef, aboutMeRef, projectRef } = useContext(SectionContext);

  const { scrollToSection } = useScroll();

  return (
    <Container>
      <aside className={styles.sidebar_container}>
        <div className={styles.intro_container}>
          <div className={styles.button_container}>
            <button
              className={styles.section_button}
              onClick={() => scrollToSection(projectRef.current.offsetTop)}
            >
              Projects
            </button>
            <button
              className={styles.section_button}
              onClick={() => scrollToSection(aboutMeRef.current.offsetTop)}
            >
              About me
            </button>
            <button
              className={styles.section_button}
              onClick={() => scrollToSection(getInTouchRef.current.offsetTop)}
            >
              Get in touch!
            </button>
          </div>

          <p className={styles.name_title}>
            Hi, I&apos;m Chris and I love web development!
          </p>
          <h5 className={styles.job_title}>Full Stack Developer</h5>

          <div className={styles.contact_icons}>
            <Link href="https://github.com/ChrisDietrich405/" target="_blank">
              <FaGithubSquare
                size="2.5em"
                color="white"
                className="github-icon"
                style={{ marginTop: "2px" }}
              />
            </Link>
            <Link
              style={{ marginLeft: "10px" }}
              href="https://www.linkedin.com/in/chris-dietrich-frontend-developer/"
              target="_blank"
            >
              <AiFillLinkedin size="2.8em" color="white" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1wlqqpc4nIX9pboOP2fauAbEoVZSyRBgv/view"
              target="_blank"
            >
              <Image
                src="/resumeicon.png"
                alt="logo"
                width={50}
                height={43}
                style={{
                  marginTop: "2px",
                }}
              />
            </Link>
          </div>
        </div>
      </aside>
    </Container>
  );
};

export default Sidebar;
