import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    mainDark: "#383838",
    subDark: "#8B8B8B",
    themeColor: "#FA9E0D",
  },
  fonts: {
    body: "'Poppins', sans-serif",
  },
  textStyles: {
    header: {
      fontFamily: "Poppins, sans-serif",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "18px",
    },
    body: {
      fontFamily: "Poppins, sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
    },
    sub: {
      fontFamily: "Poppins, sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
