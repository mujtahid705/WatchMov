import "./index.css";
import App from "./App";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);
