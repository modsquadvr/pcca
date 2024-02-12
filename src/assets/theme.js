import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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
  h1: {fontSize: '7rem', ...headerfont},
  h2: {fontSize: '7rem', ...headerfont},
  h3: {fontSize: '3rem', ...headerfont},
  h4: headerfont,
  h5: headerfont,
  h6: {fontSize:'1.5rem', ...basefont},
  body1: basefont,
  fontSize: 18,
}

let theme = createTheme({
  palette,
  typography
});

theme = responsiveFontSizes(theme, {factor:2.5})

export default theme;
