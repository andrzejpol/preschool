import { PaletteOptions } from "@mui/material/styles/createPalette";
import {
  accentColor,
  backgroundColor,
  primaryColor,
  secondaryColor,
  textColor,
} from "../../ColorVariables";

const palette: PaletteOptions = {
  primary: {
    main: primaryColor,
  },
  secondary: {
    main: secondaryColor,
  },
  text: {
    primary: textColor,
  },
  background: {
    default: backgroundColor,
  },
  action: {
    active: accentColor,
  },
};

export default palette;
