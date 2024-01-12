import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    // main: '#84A98C',
    //contrastText: '#52796F',
    main: '#56606c',
    light: '#EFEBE6',
    dark: '#354F52',
    contrastText: 'rgb(239,235,230)'
  }, 
  secondary: {
    light: '#566c62',
    main: '#566c62',
    dark: '#566c62',
    contrastText: '#EFEBE6',
  },
  light: {
    light: '#EFEBE6',
    main: '#EFEBE6',
    dark: '#56606c',
    contrastText: '#EFEBE6',
  },
  background: {
    paper: '#EFEBE6',
    shadow: '#56606c'
  },
  error: {
    main:"#B48291",
  }
};

const basefont = {
  fontFamily: [
    '"Titillium Web"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(',')
}

const headerfont = {
  fontFamily: [
    'Julius Sans One',
    basefont.fontFamily
  ].join(','),
}
const typography = {
  h1: headerfont,
  h2: headerfont,
  h3: headerfont,
  h4: headerfont,
  h5: headerfont,
  body1: basefont,
  fontSize: 18,
}

const theme = createTheme({
  palette,
  typography
});


export default theme;
