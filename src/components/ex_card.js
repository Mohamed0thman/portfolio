/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";
import Image from "./image";

export default function ExCard({
  src,
  altText = "default alt text",
  name,
  job,
  from,
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
        <Text as="p" variant="text.paragraph" sx={styles.wrapper.job}>
          {job}
        </Text>
        <Text as="p" variant="paragraph" sx={styles.wrapper.address}>
          {address}
        </Text>
        <Text as="p" variant="paragraph" sx={styles.wrapper.from}>
          {from}
        </Text>
        <Text as="p" variant="paragraph" sx={styles.wrapper.date}>
          {date}
        </Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    justifySelf: "center",
    alignItems: "self-start",
    marginTop: "40px",
  },

  img: {
    mr: "55px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",

    title: {
      fontFamily: "'Roboto', sans-serif",

      fontSize: "28px",
      color: "white",
      fontWeight: 700,
    },

    job: {
      fontFamily: "'Roboto', sans-serif",

      fontSize: "24px",
      color: "white",
      fontWeight: 400,
    },
    address: {
      fontFamily: "'Roboto', sans-serif",
      marginTop: "-15px",
      fontSize: "24px",
      color: "#9D9D9D",
    },

    date: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: "28px",
      color: "secondary",
    },
  },
};
