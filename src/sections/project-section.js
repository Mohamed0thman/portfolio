/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import { keyframes } from "@emotion/react";
import { jsx, Container, Heading, Text, Box, Flex, Button } from "theme-ui";
// import Image from "next/image";
import Image from "../components/image";

import SectionHeader from "../components/Section-header";
import Carousel from "react-multi-carousel";

import { projects } from "../data/data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function CustomDot({ onMove, index, onClick, active }) {
  return (
    <Box
      style={{
        width: active ? "20px" : "8px",
        height: "8px",
        borderRadius: active ? "5px" : "50%",
        background: active ? "#12FDC4" : "#fff",
        boxShadow: active ? "0px 2px 20px rgba(18, 253, 196, 0.58)" : "none",
        borderRadius: "19px",
        marginRight: "5px",

        translat: "all 2s ",
      }}
      onClick={() => onClick()}
    ></Box>
  );
}

export default function Project() {
  const { appDesign, webDesign } = projects;
  const all = [...appDesign, ...webDesign];
  const [state, setState] = useState({
    active: "all",
    projects: all,
  });

  return (
    <section
      id="projects"
      sx={{ variant: "section.projects" }}
      style={{
        backgroundColor: "#2A393F",
      }}
    >
      <Container css={{ textAlign: "center" }}>
        <SectionHeader text="MY" glowText="Project" />

        <Box
          as="li"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            Top projects that present the quality and the way of my work.
          </Text>
          <Flex sx={styles.buttonGroup}>
            <Box sx={styles.buttonGroupInner}>
              <Button
                className={state.active === "all" ? "active" : ""}
                type="button"
                aria-label="all"
                onClick={() =>
                  setState({
                    ...state,
                    active: "all",
                    projects: all,
                  })
                }
              >
                all
              </Button>
              <Button
                className={state.active === "appDesign" ? "active" : ""}
                type="button"
                aria-label="appDesign"
                onClick={() =>
                  setState({
                    ...state,
                    active: "appDesign",
                    projects: projects.appDesign,
                  })
                }
              >
                appDesign
              </Button>
              <Button
                className={state.active === "webDesign" ? "active" : ""}
                type="button"
                aria-label="webDesign"
                onClick={() =>
                  setState({
                    ...state,
                    active: "webDesign",
                    projects: projects.webDesign,
                  })
                }
              >
                webDesign
              </Button>
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionashow={2}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            customDot={<CustomDot />}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
          >
            {state.projects.map((item) => (
              <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
                <Image
                  priority="true"
                  width={480}
                  height={330}
                  src={item.image}
                  alt={item.title}
                />
                <Flex
                  style={{
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {item.subtitle}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  carouselWrapper: {
    mb: "-40px",
    mt: "-40px",
    mx: -3,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    flexWrap: "wrap",
    animation: `all ${fadeIn} 0.8s ease-in`,

    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    position: "relative",
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",

    color: "#fff",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["15px", "35px"],
    position: "relative",
    zIndex: 2,
  },
  buttonGroupInner: {
    display: "flex",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: "#F7F8FB",
    button: {
      border: 0,
      padding: ["15px 20px", "15px 27px"],
      borderRadius: "5px",
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#0f2137",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
