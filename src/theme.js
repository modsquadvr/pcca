import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#84A98C',
    light: '##EFEBE6',
    dark: '#354F52',
    contrastText: '#52796F',
  }, 
  secondary: {
    light: '#B48291',
    main: '#B48291',
    dark: '#B48291',
    contrastText: '#fff',
  },
  background: {
    paper: '#EFEBE6',
  },
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
    '"Overlock SC"',
    basefont.fontFamily
  ].join(','),
}
const typography = {
  h1: headerfont,
  h2: headerfont,
  h3: headerfont,
  h4: headerfont,
  body1: basefont
}

const theme = createTheme({
  palette,
  typography
});


export default theme;
