import * as React from 'react';
  // eslint-disable-next-line
import Box from '@mui/material/Box';
  // eslint-disable-next-line
import Button from '@mui/material/Button';
  // eslint-disable-next-line
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FadeRuleLight } from "components/FadeRule";
  // eslint-disable-next-line
import { useTheme } from '@mui/material/styles';

import BasePage from "pages/BasePage"

import "./home.css"

// home page sections
import About from "./sections/About"
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Podcasts from "./sections/Podcasts";


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



export default function Home() {
  return (
      <BasePage className="home" showHeader={true} showFooter={true} mode="dark">
        <Hero />
        <About />
        <Podcasts />
        <Services />
        <Projects />

    </BasePage>
  );
}