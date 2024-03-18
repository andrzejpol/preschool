import { createTheme, ThemeOptions } from "@mui/material";
import palette from "./palette/palette";

const muiThemeOptions: ThemeOptions = {
  palette,
};

const muiTheme = createTheme(muiThemeOptions);

export default muiTheme;
