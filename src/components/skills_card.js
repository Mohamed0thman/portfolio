import React from "react";
import { Flex, Box, Image } from "theme-ui";

export default function SkillsCard({ skill, index }) {
  return (
    <Flex
      style={{
        position: "relative",
        flex: " 0 0 calc(30% - 20px)",
        padding: "20px",
        margin: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{
          marginBottom: "5px",
          marginTop: "0px",
          fontSize: "40px",
          fontWidth: "700",
          color: "#2A393F",
        }}
      >
        0{index + 1}
      </h2>
      <Image
        priority="true"
        width={38}
        height={38}
        src={skill.icon}
        alt={skill.title}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
      <Box>
        <p
          style={{
            marginBottom: "5px",
            marginTop: "0px",
            fontSize: "16px",
            fontWidth: "700",
            color: "#2A393F",
          }}
        >
          {skill.title}
        </p>
        <p
          style={{
            marginBottom: "5px",
            marginTop: "0px",
            fontSize: "9px",
            fontWidth: "400",
            color: "#7B7B7B",
          }}
        >
          {skill.subTitle}
        </p>
      </Box>
    </Flex>
  );
}
