import * as React from 'react';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

import spatialForest from "assets/photos/projects/TheForest/spatial-forest.png"


export default function TheForest({project, ...props}) {


  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">
        <Grid item component="p" xs={12}>
          <Typography paragraph sx={{fontStyle:"italic"}} textAlign="left">
            The Sharing Forest is an interactive forest inspired by the traditional Metis story of The Giving Tree, designed to encourage people to get out in nature and fill our trees with cultural elements to help preserve our heritage.  The forest is filled with 3D polycam scanned trees from across Turtle Island.
          </Typography>
        </Grid>
        <Grid item xs={12} component="img"  className="card-image" src={spatialForest}/>
        <Grid item component="p" xs={12}>
          A PCCA intern Samantha Loney chose to use her experience and heritage to create a website that ties her Métis heritage to forests and the place that they hold in society. 
            This work is an extension of her ongoing <Link target="_blank" rel="noopener noreferrer" href="https://podcastle.org/people/samantha-loney/">podcast series.</Link>
        </Grid>
        <Grid item component="p" xs={12}>
          The platform on which Samantha has been doing this work is a communication platform that is being used in a number of forthcoming projects and is being extended to allow communication by communities with collections of scanned objects. Using tools such as drones and phone-based scanning software, trees and other objects of interest are being represented on the platform as images, and soon to be 3D models of the ojects. These are presented in frame with a videoconference tool which allows participants to flexibly groups themselves around the objects that they want to discuss.
        </Grid>
        <Grid item component="p" xs={12}>
            We invite you to watch a narrated tour of TheForest below, or to join the <Link href="https://app.spatial.chat/s/TheForest" target="_blank" rel="noopener noreferrer">live platform</Link> and experience it for yourself!
        </Grid>
        <Grid item xs={12}>
            <iframe src="https://player.vimeo.com/video/916867819?h=d4d53d831e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="fullscreen" allowFullScreen title="sharingforest"></iframe>
        </Grid>
      </Grid>
      {/* <iframe src="https://player.vimeo.com/video/916867819?h=d4d53d831e" width="640" height="564" frameborder="0" allow="fullscreen" allowfullscreen title="sharingforest"></iframe> */}
    </Container>

  );
}