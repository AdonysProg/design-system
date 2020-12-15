import { purple, neutral, green, red, yellow, darkPurple } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: purple[100],
  primaryColorHover: purple[200],
  primaryColorActive: purple[300],
  primaryColorDisabled: neutral[300],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  textColorDisabled: neutral[500],
  formElementBackground: neutral[200],
  textOnFormElementBackground: neutral[600],
  primaryFont,
  status: {
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
export const darkTheme = {
  primaryColor: darkPurple[100],
  primaryColorHover: darkPurple[200],
  primaryColorActive: darkPurple[300],
  primaryColorDisabled: neutral[300],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  textColorDisabled: neutral[500],
  formElementBackground: darkPurple[400],
  textOnFormElementBackground: neutral[100],
  primaryFont,
  status: {
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
