import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { Provider } from "react-redux";
import store from "./store";
import muiTheme from "./core/styles/muiTheme";

export const appTheme = createTheme(muiTheme);

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
