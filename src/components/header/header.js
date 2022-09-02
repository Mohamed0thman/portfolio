/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button, Box } from "theme-ui";
import { keyframes } from "@emotion/react";
import { NavLink } from "../link";

import { DrawerProvider } from "../../contexts/drawer/drawer.provider";

import Logo from "../logo";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";

import LogoFahmi from "../../assets/logo.svg";

export default function Header({ isSticky }) {
  return (
    <DrawerProvider>
      <header
        sx={styles.header}
        className={`${isSticky ? "sticky" : "unSticky"}`}
        id="header"
      >
        <Container sx={styles.container}>
          <Flex>
            <Logo src={LogoFahmi} />
            <Flex as="nav" sx={styles.nav}>
              {menuItems.map(({ path, label }, i) => (
                <NavLink key={i} path={path} isSticky={isSticky}>
                  {label}
                </NavLink>
              ))}
            </Flex>
          </Flex>
          <Box>
            <Button
              className={`donate__btn   ${isSticky ? "sticky" : ""}`}
              variant="secondary"
              aria-label="RESUME"
            >
              RESUME
            </Button>
            <Button
              className={`donate__btn   ${isSticky ? "sticky" : ""}`}
              variant="primary"
              aria-label="CONTACT ME"
            >
              CONTACT ME
            </Button>
            <MobileDrawer isSticky={isSticky} />
          </Box>
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "white",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
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
};
