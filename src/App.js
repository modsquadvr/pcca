import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import theme from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import ocean from './assets/ocean.png';
import { FadeRuleLight } from "./FadeRule";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://pacificcoastalcomputing.ca/">
        PCCA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            PCCA
          </Typography>
        </Toolbar>
      </AppBar>

      <main className="main">
      <FadeRuleLight/>
        {/* Hero unit */}
        <Container className="hero"  maxWidth="1">
          <Container className="bg">
            <Container className="title" sx={{maxWidth:1}}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
              >
                Pacific Coastal Computing
              </Typography>
              <Typography variant="h4" align="center" color="text.secondary" gutterBottom>
                Computing for Good
              </Typography>

            </Container>
          </Container>
          <FadeRuleLight/>
          <Typography className="blurb" variant="h5" align="center" color="text.secondary">
                We bring the innovative spirit of the rugged coast to digital transformation through consulting services, capacity building, and interdisciplinary impact projects with community, industry and academic partners. 
          </Typography>
          <FadeRuleLight/>
        </Container>

        <Container sx={{m:0, w:1, maxWidth:1}} className="about-wrapper">
          <Grid className="about" direction="row">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  // height: 233,
                  // width: 350,
                  maxHeight: { xs: 233, md: 400, lg: 500 },
                  maxWidth: { xs: 233, md: 400, lg: 400 }
                }}
                alt="The house from the offer."
                src={ocean}
              />
            </Grid>
            <Grid item xs={2} md={2}>
              <Box className="blurb">
                <Typography variant="h4">
                      PCCA | About Us
                </Typography>
                <Typography variant="body-1">
                    <p>
                      The Pacific Coastal Computing Association (PCCA) incorporated in 2020 as a non-profit based in Vancouver, B.C., Canada. PCCA works with partners to promote innovation, diversity & inclusivity in capacity building and positive change in education, the arts, environment, health & wellness and technology. 
                    </p>
                    <p>
                      Our approach to digital transformation advisory and impact projects interweaves strategic thinking of IT infrastructure, tools and technologies alongside the advanced diverse skills needed. 
                    </p>
                    <p>
                      Our umbrella mandate is computing for good (C4G).  
                    </p>
                </Typography>
              </Box>

            </Grid>
          </Grid>
        </Container>


        
        <Container className="cards" sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
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
      {/* End footer */}
    </ThemeProvider>
  );
}