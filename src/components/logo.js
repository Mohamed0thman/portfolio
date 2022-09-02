/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "./link";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        display: "flex",
        cursor: "pointer",
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="startup landing logo" />
    </Link>
  );
}
