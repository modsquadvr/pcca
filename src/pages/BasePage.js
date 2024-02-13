import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import theme from "assets/theme";
import { FadeRuleLight } from "components/FadeRule";
import logoSmall from 'assets/logos/pcca-logo-small-white.png';
import "pages/basepage.css"


function Header() {
  return (

      <AppBar className="header" position="relative">
        <Toolbar>
          <Link href="/">
            <Box component="img" src={logoSmall} alt="PCCA LOGO" height="100%"/>
          </Link>
        </Toolbar>
      </AppBar>


  )
}

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Main call to action</Button>
          <Button variant="outlined">Secondary action</Button>
      </Stack>
      </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Subtitle goes here
    </Typography>
    <Copyright />
    </Box>
  )

}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        PCCA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function BasePage(props) {
  let mainClasses = props.className + " main" + (props.mode==="dark" ? " main-dark" : "");
  let displayHeader = props.showHeader || props.showHeader === undefined;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {displayHeader ? <Header /> : ""}

      <main className={mainClasses}>
       {displayHeader && !props.hideHeaderRule ? <FadeRuleLight />: ""}
        {props.children}
      </main>
      {props.showFooter ? <Footer /> : ""}
    </ThemeProvider>
  );
 };
 