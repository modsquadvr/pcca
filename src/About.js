import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ocean from './assets/ocean.png';

export default function About() {
  return (
    <Container sx={{m:0, w:1, maxWidth:1}} className="about-wrapper">
    <Grid container className="about" direction="row">
      <Grid item xs={12} md={6} align="right">
        <Box
          component="img"
          sx={{
            // height: 233,
            // width: 350,
            maxHeight: { xs: 233, md: 400, lg: 500 },
            maxWidth: { xs: 233, md: 400, lg: 400 },
            mr:0
          }}
          alt="The house from the offer."
          src={ocean}
        />
      </Grid>
      <Grid item xs={12} md={6}>
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
  );
}
