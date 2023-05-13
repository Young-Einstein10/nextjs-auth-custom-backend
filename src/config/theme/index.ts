import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";
import { containerTheme } from "./components";

const breakpoints = {
  sm: "375px",
  md: "576px",
  lg: "768px",
  xl: "992px",
  "2xl": "1200px",
};

const theme = extendTheme({
  colors: {
    brand: "#F3C146",
    success: "rgba(39, 174, 96, 1)",
    danger: "rgba(238, 0, 32, 1)",
    info: "rgba(20, 142, 186, 1)",
    warning: "rgba(254, 155, 14, 1)",
  },
  fonts: {
    heading: "Playfair Display",
    body: "Source Sans Pro",
  },
  breakpoints,
  styles,
  components: {
    Container: containerTheme,
  },
});

export default theme;
