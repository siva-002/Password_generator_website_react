import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
    "3xl": "110em", // 1760px (custom)
    "4xl": "120em", // 1920px (custom)
  },
});

export default theme;
