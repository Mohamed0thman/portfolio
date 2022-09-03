/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading } from "theme-ui";
// import Image from "next/image";
import Image from "../components/image";

import SectionHeader from "../components/Section-header";
import List from "../components/list";
import serviceImage from "../assets/Services.png";

export default function MyServices() {
  return (
    <section sx={styles.banner} id="Home">
      <Container css={{ textAlign: "center" }}>
        <SectionHeader text="My" glowText="Services" />
        <Container sx={styles.banner.container}>
          <Box>
            <Heading
              as="p"
              style={{
                color: "#fff",

                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: " 600",
                fontSize: "39.0625px",
                lineHeight: "59px",
                textAlign: "left",
              }}
            >
              How can I make your <br /> business grow?
            </Heading>
            <List childStyle={styles.listItem} />
          </Box>

          <Box style={{ position: "relative" }}>
            <Image
              priority="true"
              width={450}
              height={350}
              src={serviceImage}
              alt="serviceImage"
            />
          </Box>
        </Container>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["30px", "35px", "40px", "45px", null, null, "52px", "60px"],
    pb: [2, null, 0, null, 2, 0, null, 5],

    position: "relative",
    zIndex: 2,
    backgroundColor: "#2A393F",
    container: {
      minHeight: "inherit",
      display: "flex",
      justifyContent: "space-between",
    },

    contentBox: {
      flexBasis: "50%",
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
      textAlign: "left",
    },
    imageBox: {
      flexBasis: "50%",
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
