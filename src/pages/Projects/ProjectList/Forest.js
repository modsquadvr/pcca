import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";
import GridPhoto from "components/GridPhoto";

import spatialForest from "assets/photos/projects/TheForest/spatial-forest.png"


export default function Forest({project, ...props}) {


  return (
    <>
      <Typography component='h4' variant='h4'>
        The Forest
      </Typography>
      <FadeRuleDark marginBottom="2em"/> 

      <Grid container spacing={4} justifyContent="center">

        <Grid item xs={12}>
          <Container component="div" sx={{maxHeight:"600px", width:"100%", height:"50vw"}}>
            <iframe src="https://player.vimeo.com/video/916867819?h=d4d53d831e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="sharingforest"></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Container>
        </Grid>


        <Grid item xs={12}>
          <Typography paragraph textAlign="left">
            The Sharing Forest is an interactive forest inspired by the traditional Metis story of The Giving Tree, designed to encourage people to get out in nature and fill our trees with cultural elements to help preserve our heritage.  The forest is filled with 3D polycam scanned trees from across Turtle Island.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography paragraph textAlign="left">
            Integrity is the foundation of mastery. Don't eat baubles when you could eat brains. From the light emanates all sorts of no-see-ums. Best to keep away. Cougars make the best pets, under certain circumstances. If you have a need for a walk, go take it. Before it is too late. Marjoram is an herb that everyone has forgotten, but this means you must be careful; it is out there, quietly waiting and biding its time until we are caught unsuspecting and unawares. Be. Ware.
          </Typography>
        </Grid>

        <GridPhoto size="4" photo={spatialForest}/>
        <GridPhoto size="4" photo={spatialForest}/>
        <GridPhoto size="4" photo={spatialForest}/>

        <Grid item xs={12}>
          <Typography paragraph textAlign="left">
            Drip drop lemon drop there's a candy in my pocket sticky sticky. Will you come out to play with me, I need someone to gnaw the thistles three icky icky. Palomino pantomime there's a rhyme for Alice's climb. Up the well of ticky-tacky sway they march in numbers one and away. Don't trust them! Yore, we have no need for swarthy worthy words upon this moor. Say no moray there's plenty of here to stay for when I'm planting an everweiss I'll let it go a galloping through the woods here today. Just pray, pray, pray for me that I can find a sweet song to call home, for 
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography component="h5" variant="h5" textAlign="center">
            <Link href="https://im4lab.com/virtualproduction" target="_blank" rel="noopener noreferrer" >Visit the Project Website</Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Container component="img" src={spatialForest} />
        </Grid>
      </Grid>  
      <Typography paragraph >
        A PCCA intern Samantha Loney chose to use her experience and heritage to create a website that ties her Metis heritage to forests and the place that they hold in society. This work is an extension of her ongoing <a href="https://podcastle.org/people/samantha-loney/">podcast series</a>
      </Typography>
      <Typography paragraph >
        The platform on which Samantha has been doing this work is a communication platform that is being used in a number of forthcoming projects and is being extended to allow communication by communities with collections of scanned objects. Using tools such as drones and phone-based scanning software, trees and other objects of interest are being represented on the platform as images, and soon to be 3D models of the ojects. These are presented in frame with a videoconference tool which allows participants to flexibly groups themselves around the objects that they want to discuss.
      </Typography>
      <Typography paragraph >
        We invite you to watch a narrated tour of TheForest below, or to join the <a href="https://app.spatial.chat/s/TheForest">live platform</a> and experience it for yourself!
      </Typography>
      <iframe src="https://player.vimeo.com/video/916867819?h=d4d53d831e" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="sharingforest"></iframe>
    </>
  );
}