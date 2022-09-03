/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import Image from "next/image";

import BacgroundImage from "../assets/background_image_ban.png";
export default function BackgroundImage() {
  return (
    <Box sx={styles.backgroundImage}>
      <Box
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Image
          priority="true"
          layout="fill"
          objectFit="cover"
          quality={100}
          src={BacgroundImage}
          alt="background"
        />
      </Box>
    </Box>
  );
}
const styles = {
  backgroundImage: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    backgroundColor: "#252F33",
    zIndex: "-1",
  },
};
