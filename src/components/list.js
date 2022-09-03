import React from "react";
import { Flex, Box, IconButton } from "theme-ui";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function List({ parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      <Flex
        as="li"
        sx={{
          ...styles.item,
          ...childStyle,
          color: "#fff",
        }}
      >
        <IconButton sx={styles.listIcon} aria-label="list icon">
          <IoIosCheckmarkCircle />
        </IconButton>
        Innovative website design
      </Flex>
      <Flex as="li" sx={{ ...styles.item, ...childStyle, color: "#fff" }}>
        <IconButton sx={styles.listIcon} aria-label="list icon">
          <IoIosCheckmarkCircle />
        </IconButton>
        UI/UX design with global trends
      </Flex>
      <Flex as="li" sx={{ ...styles.item, ...childStyle, color: "#fff" }}>
        <IconButton sx={styles.listIcon} aria-label="list icon">
          <IoIosCheckmarkCircle />
        </IconButton>
        Web and App service
      </Flex>
    </Box>
  );
}

const styles = {
  item: { fontFamily: "'Roboto', sans-serif", fontSize: "20px" },
  listIcon: {
    height: "auto",
    padding: 0,
    fontSize: "20px",
    marginRight: "5px",

    "& > svg ": {
      webkitFilter: "drop-shadow(  0px 0px 20px rgba(18, 253, 196, 0.66))",
      filter: "drop-shadow(   0px 0px 20px rgba(18, 253, 196, 0.66))",
      color: "#12FDC4",
    },
  },
};
