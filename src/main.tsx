import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
