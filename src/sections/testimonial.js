/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Paragraph } from "theme-ui";
// import Image from "next/image";
import Image from "../components/image";

import SectionHeader from "../components/Section-header";
import Carousel from "react-multi-carousel";
import ButtonGroup from "../components/button-group";

import BackgroundImage from "../components/background_image";

import { reviews } from "../data/data";

const reviewResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const avatarResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
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
        display: "inline-block",
        position: "relative",
        zIndex: "10000",
        transform: active ? "scale(1.6)" : "scale(1)",
      }}
      onClick={() => onClick()}
    >
      <Image
        priority="true"
        width={40}
        height={40}
        src={reviews[index].image}
        alt=""
      />
    </Box>
  );
}

export default function Testimonial() {
  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: reviewResponsive,
    showDots: true,
    sliderClass: "",
    slidesToSlide: 1,
    customDot: <CustomDot />,
  };

  return (
    <section
      id="testimonial"
      sx={{
        variant: "section.testimonial",
      }}
    >
      <BackgroundImage />

      <Container css={{ textAlign: "center" }}>
        <SectionHeader text="Review from my" glowText="CLients" />

        <Box sx={styles.carouselWrapper}>
          <Carousel {...sliderParams}>
            {reviews.map((item) => (
              <Paragraph
                as={"p"}
                sx={styles.reviewCard}
                key={`key${item.id}`}
                style={{
                  textAlign: "center",
                }}
              >
                {item.text}
              </Paragraph>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
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
    ".react-multi-carousel-track": { marginBottom: "50px" },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "32px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "none",
    border: "15px solid #4D5B69",
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
};
