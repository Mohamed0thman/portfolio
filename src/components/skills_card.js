import React from "react";
import { Flex, Box, Image } from "theme-ui";

export default function SkillsCard({ skill, index }) {
  return (
    <Flex
      style={{
        position: "relative",
        flex: " 0 0 calc(33.33% - 20px)",
        padding: "20px",
        margin: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <h2>0{index + 1}</h2>
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
        <p style={{ marginBottom: "5px", marginTop: "0px" }}>{skill.title}</p>
        <p style={{ marginBottom: "5px", marginTop: "0px" }}>
          {skill.subTitle}
        </p>
      </Box>
    </Flex>
  );
}
