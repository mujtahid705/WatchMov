import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#262626",
    },
  },
});

export default responsiveFontSizes(theme);
