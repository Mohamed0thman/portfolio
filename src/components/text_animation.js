/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { keyframes } from "@emotion/react";

export default function TextAnimation({ text = "UX / UI DESIGNER" }) {
  const textArray = text.split("");
  console.log(textArray);
  return (
    <Heading sx={styles.wrapper} as="h1">
      {textArray.map((letter, index) => (
        <span
          style={{
            animationDuration: (index + 1) * 0.3 + "s",
          }}
          key={index}
        >
          {letter.length == 0 ? "&nbsp;" : letter}
        </span>
      ))}
    </Heading>
  );
}

const lettersAnimation = keyframes`
 0% {opacity:0 ; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(10px)}

 100% {opacity:1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px)}
`;

const styles = {
  wrapper: {
    " & > span": {
      marginRight: "5px",
      fontFamily: "Cairo",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "120px",
      lineheight: "30px",
      /* identical to box height, or 25% */
      color: "#fff",
      display: "inline-block",
      opacity: 0,
      animation: `${lettersAnimation}`,
      animationFillMode: "forwards",
    },
  },
};
