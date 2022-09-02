/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";


import ExCard from "../components/ex_card";
import SectionHeader from "../components/Section-header";

import BackgroundImage from "../components/background_image";

import { experience as data } from "../data/data";

export default function WorkExperience() {
  return (
    <section style={{}} sx={{ variant: "section.experience" }} id="experience">
      <BackgroundImage />
      <Container>
        <SectionHeader text="Work" glowText="Experience" />
        <Grid sx={styles.grid}>
          {data.map((item, i) => (
            <ExCard
              key={i}
              src={item.image}
              alt={item.name}
              name={item.name}
              job={item.job}
              address={item.address}
              date={item.date}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
