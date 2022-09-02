/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import Image from "next/image";

import { keyframes } from "@emotion/react";

import SectionHeader from "../components/Section-header";

import ae from "../assets/icons/ae.svg";
import ai from "../assets/icons/ai.svg";
import balsamiq from "../assets/icons/balsamiq.svg";
import figma from "../assets/icons/figma.svg";
import ine from "../assets/icons/in.svg";
import miro from "../assets/icons/ae.svg";
import ps from "../assets/icons/ps.svg";
import xd from "../assets/icons/xd.svg";

import BackgroundImage from "../components/background_image";
import { skills } from "../data/data";

export default function ToolsAndSkills() {
  return (
    <section sx={styles.tools} id="Tools">
      <BackgroundImage />
      <Container>
        <SectionHeader text="Tools &" glowText="Skills" />
        <Container sx={styles.tools.container}>
          <Box sx={styles.tools.main}>
            <Image
              priority
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
            <div
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-1s" }}
            >
              <Image
                priority
                objectFit="contain"
                layout="fill"
                src={ps}
                alt=""
                style={{
                  animationDelay: "-1s",
                }}
              />
            </div>
            <div
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-2s" }}
            >
              <Image
                priority
                objectFit="contain"
                layout="fill"
                src={ai}
                alt=""
                style={{
                  animationDelay: "-2s",
                }}
              />
            </div>
            <div
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-3s" }}
            >
              <Image
                priority
                objectFit="contain"
                layout="fill"
                src={xd}
                alt=""
                style={{
                  animationDelay: "-3s",
                }}
              />
            </div>
            <div
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-4s" }}
            >
              <Image
                priority
                objectFit="contain"
                layout="fill"
                src={miro}
                alt=""
                style={{
                  animationDelay: "-4s",
                }}
              />
            </div>
            <div
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-5s" }}
            >
              <Image
                priority
                objectFit="contain"
                layout="fill"
                src={ine}
                alt=""
                style={{
                  animationDelay: "-5s",
                }}
              />
            </div>
            <div
              sx={styles.tools.item}
              style={{ position: "relative", animationDelay: "-6s" }}
            >
              <Image
                priority
                objectFit="contain"
                layout="fill"
                src={ae}
                alt=""
                style={{
                  animationDelay: "-6s",
                }}
              />
            </div>
            <div
              sx={styles.tools.item}
              style={{
                position: "relative",

                animationDelay: "-7s",
              }}
            >
              <Image
                priority
                objectFit="contain"
                layout="fill"
                src={balsamiq}
                alt=""
                style={{
                  animationDelay: "-7s",
                }}
              />
            </div>
          </Box>
          <Flex
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {skills.map((skill, i) => (
              <Flex
                key={i}
                style={{
                  position: "relative",
                  flex: " 0 0 calc(33.33% - 20px)",
                  padding: "20px",
                  margin: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              >
                <h2>0{i + 1}</h2>
                <Image
                  priority
                  width={38}
                  height={38}
                  src={skill.icon}
                  alt={skill.title}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
                <Box>
                  <p style={{ marginBottom: "5px", marginTop: "0px" }}>
                    {skill.title}
                  </p>
                  <p style={{ marginBottom: "5px", marginTop: "0px" }}>
                    {skill.subTitle}
                  </p>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Container>
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
    backgroundColor: "#2A393F",
    container: {
      minHeight: "inherit",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
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

      " & > span >img": {
        animation: `${spinAroundSelf} 7s linear infinite`,
      },
    },
  },
};
