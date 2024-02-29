import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";
import GridPhoto from "components/GridPhoto";

import spatialForest from "assets/photos/projects/TheForest/spatial-forest.png"


export default function TheForest({project, ...props}) {


  return (
    <>
      <Typography component='h4' variant='h4'>
        The Forest
      </Typography>
      <FadeRuleDark/>

      <Container>
        <Grid container spacing={4} justifyContent="center">




          <Grid item xs={12}>
            <Typography paragraph sx={{fontStyle:"italic"}} textAlign="left">
              The Sharing Forest is an interactive forest inspired by the traditional Metis story of The Giving Tree, designed to encourage people to get out in nature and fill our trees with cultural elements to help preserve our heritage.  The forest is filled with 3D polycam scanned trees from across Turtle Island.
            </Typography>
          </Grid>

          <GridPhoto size={12} photo={spatialForest}/>
          <Grid item xs={12}>
            <Typography paragraph >
              A PCCA intern Samantha Loney chose to use her experience and heritage to create a website that ties her Métis heritage to forests and the place that they hold in society. 
              This work is an extension of her ongoing <Link target="_blank" rel="noopener noreferrer" href="https://podcastle.org/people/samantha-loney/">podcast series.</Link>
            </Typography>
            <Typography paragraph >
              The platform on which Samantha has been doing this work is a communication platform that is being used in a number of forthcoming projects and is being extended to allow communication by communities with collections of scanned objects. Using tools such as drones and phone-based scanning software, trees and other objects of interest are being represented on the platform as images, and soon to be 3D models of the ojects. These are presented in frame with a videoconference tool which allows participants to flexibly groups themselves around the objects that they want to discuss.
            </Typography>
            <Typography paragraph >
              We invite you to watch a narrated tour of TheForest below, or to join the <Link href="https://app.spatial.chat/s/TheForest" target="_blank" rel="noopener noreferrer">live platform</Link> and experience it for yourself!
            </Typography>
          </Grid>  
          <Grid item xs={12}>
            <Box component="div" sx={{maxHeight:"600px", width:"100%", height:"50vw"}}>
              <iframe src="https://player.vimeo.com/video/916867819?h=d4d53d831e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="sharingforest"></iframe>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* <iframe src="https://player.vimeo.com/video/916867819?h=d4d53d831e" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="sharingforest"></iframe> */}
    </>
  );
}