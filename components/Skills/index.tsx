"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs, TbBrandCss3 } from "react-icons/tb";
import {
  SiJest,
  SiTypescript,
  SiRedux,
  SiFigma,
  SiPostman,
  SiVisualstudio,
  SiFirebase,
  SiMongodb,
  SiDocker,
  SiAwslambda,
  SiAmazonec2,
  SiAmazondynamodb,
  SiAmazons3,
  SiAmazonsqs,
} from "react-icons/si";
import {
  FaReact,
  FaSass,
  FaGithubSquare,
  FaBootstrap,
  FaAws,
} from "react-icons/fa";
import { DiMysql, DiNodejsSmall } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";

import useTechnologies from "../../hooks/useTechnologies";

import styles from "./styles.module.css";

const Skills = () => {
  const { technologies } = useTechnologies();

  const convertIcon = (icon: string) => {
    switch (icon) {
      case "AiOutlineHtml5": {
        return <AiOutlineHtml5 className={`${styles.individual_icon} `} />;
      }
      case "TbBrandCss3": {
        return <TbBrandCss3 className={`${styles.individual_icon} `} />;
      }
      case "IoLogoJavascript": {
        return <IoLogoJavascript className={`${styles.individual_icon} `} />;
      }
      case "FaReact": {
        return <FaReact className={`${styles.individual_icon} `} />;
      }
      case "FaBootstrap": {
        return <FaBootstrap className={`${styles.individual_icon} `} />;
      }
      case "SiRedux": {
        return <SiRedux className={`${styles.individual_icon} `} />;
      }
      case "FaGithubSquare": {
        return <FaGithubSquare className={`${styles.individual_icon} `} />;
      }
      case "SiFigma": {
        return <SiFigma className={`${styles.individual_icon} `} />;
      }
      case "SiPostman": {
        return <SiPostman className={`${styles.individual_icon} `} />;
      }
      case "SiVisualstudio": {
        return <SiVisualstudio className={`${styles.individual_icon} `} />;
      }
      case "FaSass": {
        return <FaSass className={`${styles.individual_icon} `} />;
      }
      case "SiTypescript": {
        return <SiTypescript className={`${styles.individual_icon} `} />;
      }
      case "TbBrandNextjs": {
        return <TbBrandNextjs className={`${styles.individual_icon} `} />;
      }
      case "DiMysql": {
        return <DiMysql className={`${styles.individual_icon} `} />;
      }
      case "BsFiletypeSql": {
        return <BsFiletypeSql className={`${styles.individual_icon} `} />;
      }
      case "DiNodejsSmall": {
        return <DiNodejsSmall className={`${styles.individual_icon} `} />;
      }
      case "SiMongodb": {
        return <SiMongodb className={`${styles.individual_icon} `} />;
      }
      case "SiFirebase": {
        return <SiFirebase className={`${styles.individual_icon} `} />;
      }
      case "SiDocker": {
        return <SiDocker className={`${styles.individual_icon} `} />;
      }
      case "SiJest": {
        return <SiJest className={`${styles.individual_icon} `} />;
      }
      case "FaAws": {
        return <FaAws className={`${styles.individual_icon} `} />;
      }
      case "SiAwslambda ": {
        return <SiAwslambda className={`${styles.individual_icon} `} />;
      }
      case "SiAmazonec2 ": {
        return <SiAmazonec2 className={`${styles.individual_icon} `} />;
      }
      case "SiAmazondynamodb": {
        return <SiAmazondynamodb className={`${styles.individual_icon} `} />;
      }
      case "SiAmazonsqs": {
        return <SiAmazonsqs className={`${styles.individual_icon} `} />;
      }
      case "SiAmazons3": {
        return <SiAmazons3 className={`${styles.individual_icon} `} />;
      }
    }
  };

  return (
    <>
      <h2 className={styles.title}>Skills</h2>

      <Grid spacing={3} className={styles.grid_container}>
        {technologies &&
          technologies.map((card, index) => {
            return (
              <Grid md={12} key={index} item className={styles.individual_grid}>
                <h3 key={index} className={styles.card_title}>
                  {card.title}
                </h3>
                {card.items.map((item, index) => {
                  return (
                    <div key={index} className={styles.credentials}>
                      {item.name}
                      {convertIcon(item.icon)}
                    </div>
                  );
                })}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Skills;
