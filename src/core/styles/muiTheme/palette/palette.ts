import { PaletteOptions } from '@mui/material/styles/createPalette';
import {
  accentColor,
  buttonColor,
  mainBackgroundColor,
  secondaryAccentColor,
  textColor,
} from '../../ColorVariables';

const palette: PaletteOptions = {
  primary: {
    main: buttonColor,
  },
  secondary: {
    main: secondaryAccentColor,
  },
  text: {
    primary: textColor,
  },
  background: {
    default: mainBackgroundColor,
  },
  action: {
    active: accentColor,
  },
};

export default palette;
