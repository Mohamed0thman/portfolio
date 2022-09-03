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
    <section sx={styles.services} id="Home">
      <Container sx={styles.services.container}>
        <SectionHeader text="My" glowText="Services" />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: "75px",
          }}
        >
          <Box>
            <Heading
              as="p"
              style={{
                color: "#fff",

                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: " 600",
                fontSize: "39px",
                textAlign: "left",
                marginBottom: "35px",
              }}
            >
              How can I make your <br /> business grow?
            </Heading>
            <List childStyle={styles.services.listItem} />
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
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  services: {
    pt: ["65px", "70px"],
    pb: ["65px", "70px"],

    position: "relative",
    zIndex: 2,
    backgroundColor: "#2A393F",
    imageBox: {
      flexBasis: "50%",
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
