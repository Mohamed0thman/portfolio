/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Text } from "theme-ui";

import Image from "next/image";

import SectionHeader from "../components/Section-header";
import Hero from "../assets/hero.png";
export default function AboutMe() {
  return (
    <section sx={styles.aboutMe} id="Home">
      <Container css={{ textAlign: "center" }}>
        <SectionHeader text="About" glowText="Me" />
        <Box sx={styles.aboutMe.container}>
          <Text
            as="p"
            variant="paragraph"
            style={{
              flexBasis: "60%",
              textAlign: "left",
            }}
          >
            I&apos;m a UI/UX Designer, Interaction Designer, and Product
            Designer. My focus is understanding and translating business
            objectives into stunning user-friendly designs. My usual workflow
            for new products involves learning business/client needs, conducting
            competitive research, creating user personas, wireframing, usability
            testing, prototyping, hi-fi UI, test again, and iterate to improve
            the experience based on the findings. All of my processes are
            scalable and steps can be removed or added to fit the client&apos;s
            and timelines.
          </Text>
          <div sx={styles.aboutMe.imageBox}>
            <Image src={Hero} alt="hero" layout="fill" objectFit="contain" />
          </div>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  aboutMe: {
    pt: ["30px", "35px", "40px", "45px", null, null, "52px", "60px"],
    pb: ["30px", "35px", "40px", "45px", null, null, "52px", "60px"],
    position: "relative",
    zIndex: 2,
    backgroundColor: "#2A393F",
    container: {
      height: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
    },

    imageBox: {
      flexBasis: "35%",
      width: "100%",
      height: "450px",
      position: "relative",
    },
  },
};
