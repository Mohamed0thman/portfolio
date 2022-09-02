/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Heading, Text } from "theme-ui";
import { keyframes } from "@emotion/react";
import Image from "next/image";

// import Image from "../components/image";

import Gmail from "../assets/icons/Gmail_icon.svg";
import Linkedin from "../assets/icons/Linkedin_icon.svg";
import Be from "../assets/icons/Be_icon.svg";

import { TypeAnimation } from "react-type-animation";

import BackgroundImage from "../components/background_image";

export default function Banner() {
  return (
    <section sx={styles.banner} id="Home">
      <BackgroundImage />
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h2" variant="heroSecondary" sx={styles.banner.hero}>
            i’m
            <TypeAnimation
              sequence={[
                "FAHMI ELZORKANY",

                () => {
                  // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              speed={9}
              style={{ fontSize: "40px" }}
            />
          </Heading>
          <Heading variant="heroPrimary" sx={styles.banner.heading} as="h1">
            UX / UI DESIGNER
          </Heading>
          <Text as="p" sx={styles.banner.paragraph}>
            I believe in the power of design to change the world!
          </Text>
          <Box
            style={{
              marginTop: "55px",
            }}
          >
            <Image priority width={46} height={38} src={Gmail} alt="Gmail" />
            <Image priority width={46} height={38} src={Be} alt="Be" />
            <Image
              priority
              width={46}
              height={38}
              src={Linkedin}
              alt="Linkedin"
            />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const shine = keyframes`
  
0%{
  background-position: 00% center;
}
50%{
  background-position: 100% center;
}
100%{
  background-position: 0% center;
}

`;

const styles = {
  banner: {
    backgroundColor: "#252F33",
    height: "100vh",
    position: "relative",
    zIndex: 2,
    container: {
      pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
      pb: [2, null, 0, null, 2, 0, null, 5],
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },

    heading: {
      background:
        " linear-gradient(270deg, #D69008 3.66%, #FF5D53 39.81%, #FA314A 66.14%, #1A21BC 102.8%)",
      webkitBackgroundClip: "text",
      webkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent",
      backgroundSize: "200% auto",
      animation: `${shine} 3s linear infinite`,
    },
    glow: {
      fontFamily: "Quantico",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "40px",
      lineHeight: "30px",
      color: "#12FDC4",
      textShadow: "0px 4px 20px rgba(0, 255, 209, 0.58)",
    },
    paragraph: { color: "#fff" },
  },
};
