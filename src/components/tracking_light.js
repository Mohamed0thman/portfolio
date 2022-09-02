import { Box } from "theme-ui";
import { useState, useEffect } from "react";

export default function TrackingLight() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x - 25);
      setY(e.y - 25);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);
  return x && y ? (
    <Box
      style={{
        pointerEvents: "none",

        width: "50px",
        height: "50px",
        borderRadius: "25px",
        backgroundColor: "#12FDC4",

        position: "fixed",
        zIndex: "10000000000",
        opacity: ".2",

        top: y,
        left: x,
      }}
    ></Box>
  ) : null;
}
