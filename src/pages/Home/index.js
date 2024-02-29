import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FadeRuleLight } from "components/FadeRule";
import { useTheme } from '@mui/material/styles';

import BasePage from "pages/BasePage"
import flower from 'assets/photos/flower.png';

import "./home.css"

// home page sections
import About from "./sections/About"
import Services from "./sections/Services";
import Projects from "./sections/Projects";


function Hero() {
  return (
    <Container className="hero"  disableGutters maxWidth="1" sx={{margin:0}}>
      <Container className="bg" disableGutters maxWidth="1" sx={{margin:0}}>
        <Stack className="title" sx={{maxWidth:1}} spacing={2} justifyContent="space-evenly">
          <Typography
            component="h2"
            variant="h2"
            align="center"
            color="text.primary"
          >
            Pacific Coastal Computing
          </Typography>
          <Typography variant="h3" align="center" color="text.secondary" gutterBottom>
            Computing for Good
          </Typography>

        </Stack>
      </Container>
      <FadeRuleLight/>
      <Container>
        <Typography sx={{pb:"2em"}} className="blurb" variant="h6" align="center" color="text.secondary">
              We bring the innovative spirit of the rugged coast to digital transformation through consulting services, capacity building, and interdisciplinary impact projects with community, industry and academic partners. 
        </Typography>
      </Container>

      <FadeRuleLight/>
    </Container>
  )
}

function Heart() {
  // eslint-disable-next-line
  const theme = useTheme();

  return (
    <Container sx={{m:0, w:1, maxWidth:1}} className="infodump dark heart">
      <Grid container spacing={4} className="infodump-grid" direction="row">
        <Grid item xs={12} md={6} align="right">
          <Box
            component="img"
            sx={{
              maxWidth:"1",
              mr:0
            }}
            title="Salmonberry Flower, taken by Sang Mah"
            alt=""
            src={flower}
          />
        </Grid>
        <Grid item xs={12} md={6} >
        <Box className="blurb">
            <Typography variant="h4">
                  Our HEART Focus
            </Typography>
            <Typography variant="body-1">
                <p>
                  H. Healthcare: health & wellbeing, esp. mental health.  
                </p>
                <p>
                  E. Environment: sustainability and conservation. 
                </p>
                <p>
                  A. The Arts: performing arts, interactive media and A&E. 
                </p>
                <p>
                  R. Reconciliation: fostering harmony, diversity & inclusivity. 
                </p>
                <p>
                  T. Technology: innovation, applied research, computing 4 good.
                </p>
                <Button variant="outlined" color="light" href="/heart">Learn More</Button>
            </Typography>
          </Box>

        </Grid>
      </Grid>
    </Container>
  );
}



export default function Home() {
  return (
      <BasePage className="home" showHeader={true} showFooter={true} mode="dark">
        <Hero />
        <About />
        <Heart />
        <Services />
        <Projects />

    </BasePage>
  );
}