import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import TrackingLight from "../components/tracking_light";
import theme from "../theme/index";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Banner from "../sections/banner";
import AboutMe from "../sections/about-me";
import WorkExperience from "../sections/work-experience";
import MyServices from "../sections/services-section";
import Project from "../sections/project-section";
import TestimonialCard from "../sections/testimonial";
import ToolsAndSkills from "../sections/tools_and_skills";

export default function DesignProcess() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <SEO title="Fahmi" />
        <div>dasd</div>
        <div>dasd</div>
      </StickyProvider>
    </ThemeProvider>
  );
}
