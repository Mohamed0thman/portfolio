/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";
// import Image from "next/image";
import Image from "./image";

export default function ExCard({
  src,
  altText = "default alt text",
  name,
  job,
  address,
  date,
}) {
  return (
    <Box sx={styles.card}>
      <Image
        priority="true"
        width={87}
        height={87}
        src={src}
        alt={altText}
        sx={styles.img}
      />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{name}</Heading>
        <Text sx={styles.wrapper.subTitle}>{job}</Text>
        <Text sx={styles.wrapper.subTitle}>{address}</Text>
        <Text sx={styles.wrapper.subTitle}>{date}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    justifySelf: "center",
    mb: -1,
  },

  img: {
    width: ["70px", null, null, "80px", "90px", "auto"],
    height: "auto",
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [2, 3],
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ["10px", null, "15px"],
    },

    subTitle: {
      fontSize: [1, "15px"],
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
};
