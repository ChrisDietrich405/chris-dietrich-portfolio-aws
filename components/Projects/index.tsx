import React from "react";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { FaGithubSquare } from "react-icons/fa";

import { SectionContext } from "../../context/LinkContext";
import { useContext } from "react";
import useProjects from "../../hooks/useProjects";

import styles from "./styles.module.css";

export default function Projects() {
  const { projectRef } = useContext(SectionContext);
  const { projects } = useProjects();

  return (
    <>
      <Grid className={styles.grid_container}>
        <h2 ref={projectRef} className={styles.title}>
          Projects
        </h2>
        {projects &&
          projects.map((card, index) => {
            return (
              <Grid
                style={{
                  transition: "0.5s",
                  borderRadius: "14px",
                }}
                item
                xs={12}
                md={12}
                className={`${styles.individual_project_grid}`}
                id="languages-card"
                key={index}
              >
                <div className={styles.portfolio}>
                  <div className={styles.image_container}>
                    <Link href={`${card.link}`} target="_blank">
                      <Image
                        className={styles.image}
                        style={{ borderRadius: "5px" }}
                        src={card.image}
                        alt="project"
                        width={525}
                        height={125}
                      />
                    </Link>
                    <Link
                      href={`${card.github_link}`}
                      target="_blank"
                      className={styles.github_link}
                    >
                      GitHub Repo
                      <FaGithubSquare />
                    </Link>
                  </div>

                  <div className={styles.card_description}>
                    <div className={styles.title_container}>
                      <h3 key={index} className={styles.card_title}>
                        <Link href={`${card.link}`} target="_blank">
                          {card.title}
                        </Link>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`${styles.svg_icon} ${styles.position}`}
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </h3>
                    </div>
                    <div className={styles.technologies_libraries_container}>
                      <div>
                        <h4 className={styles.subheading_title}>
                          Technologies
                        </h4>
                        <ul className={styles.list_container}>
                          {card.technologies.map((technology) => {
                            return <li key={technology}>{technology}</li>;
                          })}
                        </ul>
                      </div>
                      <div>
                        <h4 className={styles.subheading_title}>Libraries</h4>
                        <ul className={styles.list_container}>
                          {card.libraries.map((library) => {
                            return <li key={library}>{library}</li>;
                          })}
                        </ul>
                      </div>
                      <div>
                        {card.backend.some(Boolean) && (
                          <h4 className={styles.subheading_title}>Backend</h4>
                        )}
                        <ul className={styles.list_container}>
                          {card.backend.map((backend, index) =>
                            backend ? <li key={index}>{backend}</li> : null
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
