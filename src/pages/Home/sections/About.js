import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import ocean from 'assets/photos/ocean.png';


export default function About() {
  return (
    <Container sx={{m:0, w:1, maxWidth:1}} className="infodump light about">
      <Grid container spacing={4} className="infodump-grid" direction="row">
        <Grid item 
              xs={12} md={6} 
              textAlign="right"
        >
          <Box className="blurb">
            <Typography variant="h4">
                  PCCA | About Us
            </Typography>
            <Typography variant="body-1">
                <p>
                  The Pacific Coastal Computing Association (PCCA) incorporated in 2020 as a non-profit based in Victoria, B.C., Canada. PCCA works with partners to promote innovation, diversity & inclusivity in capacity building and positive change in education, the arts, environment, health & wellness and technology. 
                </p>
                <p>
                  Our approach to digital transformation advisory and impact projects interweaves strategic thinking of IT infrastructure, tools and technologies alongside the advanced diverse skills needed. 
                </p>
                <p>
                  Our umbrella mandate is computing for good (C4G).  
                </p>
                <Button variant="contained" href="/about">Learn More</Button>
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={12} md={6}>
        <Box
            component="img"
            sx={{
              maxWidth:"1",
              maxHeight:"550px",
              mr:0
            }}
            title="Powell River across the strait, taken by Andy Wynden"
            alt="A calm seascape with smooth mottled grey rocks in the foreground. Across the water there are mountains in the far distance. The photograph is taken in the early evening, and there are wisps of clouds all across the sky in various shades of blue and grey, complementing the blues and grays of the rocks and the ocean. "
            src={ocean}
          />


        </Grid>
      </Grid>
    </Container>
  );
}
