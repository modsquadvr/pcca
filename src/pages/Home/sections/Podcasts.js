import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import flower from 'assets/photos/flower.png';


export default function Podcasts() {
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
                  Podcasts
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
                <Button variant="outlined" color="light" href="/podcasts">Learn More</Button>
            </Typography>
          </Box>

        </Grid>
      </Grid>
    </Container>
  );
}

