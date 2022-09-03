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
        <Box sx={styles.aboutMe.container}>
          <SectionHeader text="About" glowText="Me" />

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
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
              for new products involves learning business/client needs,
              conducting competitive research, creating user personas,
              wireframing, usability testing, prototyping, hi-fi UI, test again,
              and iterate to improve the experience based on the findings. All
              of my processes are scalable and steps can be removed or added to
              fit the client&apos;s and timelines.
            </Text>
            <div sx={styles.aboutMe.imageBox}>
              <Image src={Hero} alt="hero" layout="fill" objectFit="contain" />
            </div>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  aboutMe: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "#2A393F",
    container: {
      pt: ["65px", "70px"],
      pb: [2, null, 0, null, 2, 0, null, 5],
      height: "auto",
    },

    imageBox: {
      flexBasis: "35%",
      width: "100%",
      height: "450px",
      position: "relative",
    },
  },
};
