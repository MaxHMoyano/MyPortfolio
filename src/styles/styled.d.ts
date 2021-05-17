// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    spacing: Spacing;
    measures: Spacing;
  }
}

interface Spacing {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

interface Colors {
  primary: string;
  secondary: string;
  light: string;
  white: string;
  dark: string;
  darkGray: string;
  black: string;
}
