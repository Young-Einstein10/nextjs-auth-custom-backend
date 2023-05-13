import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// define custom sizes
const sizes = {
  sm: defineStyle({
    maxW: "768px",
    p: "4",
  }),
  md: defineStyle({
    maxW: "container.sm",
    p: "6",
    fontSize: "lg",
  }),
  lg: defineStyle({
    maxW: "1200px",
    p: "8",
    fontSize: "xl",
  }),
};

// export the component theme
export const containerTheme = defineStyleConfig({
  sizes,
  defaultProps: {
    size: "lg",
  },
});
