/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import Image from "../components/image";

import { keyframes } from "@emotion/react";

import SectionHeader from "../components/Section-header";
import SkillsCard from "../components/skills_card";

import ae from "../assets/icons/ae.svg";
import ai from "../assets/icons/ai.svg";
import balsamiq from "../assets/icons/balsamiq.svg";
import figma from "../assets/icons/figma.svg";
import ine from "../assets/icons/in.svg";
import miro from "../assets/icons/miro.svg";
import ps from "../assets/icons/ps.svg";
import xd from "../assets/icons/xd.svg";

import BackgroundImage from "../components/background_image";
import { skills } from "../data/data";

export default function ToolsAndSkills() {
  return (
    <section style={{ overflow: "hidden" }} sx={styles.tools} id="Tools">
      <BackgroundImage />
      <Container sx={styles.tools.container}>
        <SectionHeader text="Tools &" glowText="Skills" />
        <Box sx={styles.tools.content}>
          <Box sx={styles.tools.main}>
            <Image
              priority="true"
              width={65}
              height={65}
              className="figma"
              style={{
                position: "relative",
                justifySelf: "center",
                alignSelf: "center",
              }}
              src={figma}
              alt=""
            />
            <Box
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-1s" }}
            >
              <Image
                priority="true"
                objectfit="contain"
                layout="fill"
                src={ps}
                alt=""
                style={{
                  animationDelay: "-1s",
                }}
              />
            </Box>
            <Box
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-2s" }}
            >
              <Image
                priority="true"
                objectfit="contain"
                layout="fill"
                src={ai}
                alt=""
                style={{
                  animationDelay: "-2s",
                }}
              />
            </Box>
            <Box
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-3s" }}
            >
              <Image
                priority="true"
                objectfit="contain"
                layout="fill"
                src={xd}
                alt=""
                style={{
                  animationDelay: "-3s",
                }}
              />
            </Box>
            <Box
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-4s" }}
            >
              <Image
                priority="true"
                objectfit="contain"
                layout="fill"
                src={miro}
                alt=""
                style={{
                  animationDelay: "-4s",
                }}
              />
            </Box>
            <Box
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-5s" }}
            >
              <Image
                priority="true"
                objectfit="contain"
                layout="fill"
                src={ine}
                alt=""
                style={{
                  animationDelay: "-5s",
                }}
              />
            </Box>
            <Box
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-6s" }}
            >
              <Image
                priority="true"
                objectfit="contain"
                layout="fill"
                src={ae}
                alt=""
                style={{
                  animationDelay: "-6s",
                }}
              />
            </Box>
            <Box
              sx={styles.tools.item}
              style={{
                position: "relative",

                animationDelay: "-7s",
              }}
            >
              <Image
                priority="true"
                objectfit="contain"
                layout="fill"
                src={balsamiq}
                alt=""
                style={{
                  animationDelay: "-7s",
                }}
              />
            </Box>
          </Box>
          <Flex
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            {skills.map((skill, i) => (
              <SkillsCard key={i} index={i} skill={skill} />
            ))}
          </Flex>
        </Box>
      </Container>
    </section>
  );
}

const spinAround = keyframes`


  from {
    transform: rotate(0deg) translate(180px);
  }
  to {
    transform: rotate(360deg) translate(180px);
  }
`;
const spinAroundSelf = keyframes`

  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const styles = {
  tools: {
    pt: ["30px", "35px", "40px", "70px", null, null, "52px", "60px"],
    pb: ["30px", "35px", "40px", "70px", null, null, "52px", "60px"],
    position: "relative",
    zIndex: 2,
    content: {
      minHeight: "inherit",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "75px",
    },

    main: {
      width: "500px",
      height: "400px",

      borderRadius: "10px",
      borderWidth: "2px",

      display: "grid",
      justifyContent: "center",
      alignContent: "center",

      "& > *": {
        gridColumn: "1",
        gridRow: "1",
      },
    },

    item: {
      width: "65px",
      height: "65px",
      animation: ` ${spinAround} 7s linear infinite`,

      " &  > img": {
        animation: `${spinAroundSelf} 7s linear infinite`,
      },
    },
  },
};
