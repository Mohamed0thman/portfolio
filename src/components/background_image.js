import Image from "next/image";

import BacgroundImage from "../assets/background_image_ban.png";
export default function BackgroundImage() {
  return (
    <div sx={styles.backgroundImage}>
      <Image
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
        src={BacgroundImage}
        alt="background"
      />
    </div>
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
