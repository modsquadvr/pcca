import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

  // eslint-disable-next-line
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


        </Grid>
      </Grid>
    </Container>
  );
}

