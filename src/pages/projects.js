import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import TrackingLight from "../components/tracking_light";
import theme from "../theme/index";
import SEO from "../components/seo";

import Header from "../components/header/header";

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Header />
        <SEO title="Fahmi" />
        <div>project</div>
      </StickyProvider>
    </ThemeProvider>
  );
}
