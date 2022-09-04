/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Grid,
  Container,
  Image,
  Heading,
  Text,
  Flex,
} from "theme-ui";
import { Link } from "../link";

import LogoFahmi from "../../assets/icons/logo.svg";
import texter from "../../assets/footer_texter.png";

import Logo from "../logo";

import { links, icons } from "./footer.data";
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Flex
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo src={LogoFahmi} />
          <Flex as="nav" sx={styles.footer.nav}>
            {links.map(({ path, label }, i) => (
              <Link to={path} key={i}>
                {label}
              </Link>
            ))}
          </Flex>
          <Flex as="nav" sx={styles.footer.nav}>
            {icons.map(({ icon, path }, i) => (
              <Link to={path} key={i}>
                <Image src={icon} alt={path} />
              </Link>
            ))}
          </Flex>
        </Flex>
        <Text
          as={"p"}
          style={{ fontSize: "14px", textAlign: "center", marginTop: "23px" }}
        >
          &copy; Copyright 2022. All Right Reserved by Fahmi Elzorkany
        </Text>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "#1E2A2F",
    backgroundImage: `url(${texter})`,
    backgroundRepeat: "no-repeat",
    height: "100%",
    backgroundSize: "cover",
    container: {
      pt: ["20px", "20px"],
      pb: ["20px", "20px"],
    },
    nav: {
      display: "none",
      "@media screen and (min-width: 1024px)": {
        display: "flex",
        alignItems: "center",
      },
      a: {
        fontSize: 2,
        fontWeight: "body",
        px: 5,
        cursor: "pointer",
        lineHeight: "1.2",
        transition: "all 0.15s",
        color: "#CFCFCF",
        "&:hover": {
          color: "#ffff",
        },
        "&.active": {
          color: "#ffff",
        },
      },
    },
  },
};
