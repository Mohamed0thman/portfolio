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

import LogoFahmi from "../../assets/logo.svg";
import texter from "../../assets/footer_texter.png";

import Logo from "../logo";

import { links, icons } from "./footer.data";
export default function Footer() {
  return (
    <footer
      sx={styles.footer}
      style={{
        backgroundColor: "#252F33",
        backgroundImage: `url(${texter})`,
        backgroundRepeat: "no-repeat",
        height: "100%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Flex>
          <Logo src={LogoFahmi} />
          <Flex as="nav" sx={styles.nav}>
            {links.map(({ path, label }, i) => (
              <Link to={path} key={i}>
                {label}
              </Link>
            ))}
          </Flex>
          <Flex as="nav" sx={styles.nav}>
            {icons.map(({ icon, path }, i) => (
              <Link
                to={path}
                key={i}
              >
                <Image src={icon} alt={path} />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {},
};
