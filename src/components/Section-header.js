/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

export default function SectionHeader({ text, glowText }) {
  return (
    <Heading as="h2" variant="heroSecondary">
      {text}
      <span>{glowText}</span>
    </Heading>
  );
}
