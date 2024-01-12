import "./home.css"
import flower from '../../assets/photos/flower.png';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FadeRuleLight } from "../../components/FadeRule";
import { useTheme } from '@mui/material/styles';
import BasePage from "../BasePage"

// page sections
import About from "./sections/About"
import Services from "./sections/Services";
import Projects from "./sections/Projects";


function Hero() {
  return (
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
  const theme = useTheme();

  return (
    <Container sx={{m:0, w:1, maxWidth:1}} className="infodump infodump-dark heart">
      <Grid container className="infodump-grid" direction="row">
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
                <Button variant="outlined" color="light">Learn More</Button>
            </Typography>
          </Box>

        </Grid>
      </Grid>
    </Container>
  );
}



export default function Home() {
  return (
      <BasePage hideHeader={false} hideFooter={false}>
        <FadeRuleLight/>
        <Hero />
        <About />
        <Heart />
        <Services />
        <Projects />

    </BasePage>
  );
}