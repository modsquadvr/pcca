import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";
import GridPhoto from "components/GridPhoto";

import spatialForest from "assets/photos/TheForest/spatial-forest.png"


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
        The Moyle Interconnector is a 500 megawatt (MW) HVDC link between Scotland and Northern Ireland, running between Auchencrosh in Ayrshire and Ballycronan More in County Antrim. It went into service in 2001 and is owned and operated by Mutual Energy.
      </Typography>
      <Typography paragraph >
        The Moyle Interconnector has a capacity of 500 MW and is of dual monopole configuration. Each pole consists of a coaxial 250 kV DC cable with integrated return conductors (IRC), each cable having a transmission capacity of 250 MW. The LV return conductor elements of the IRCs have suffered failures (see below), and their function was restored by laying new separate metallic return conductors (MRCs) in 2016. The converter stations were designed and constructed by Siemens, and were the first to feature Siemens light-triggered thyristors.
      </Typography>
      <Typography paragraph >
        Moyle is a Line Commutated Converter (LCC) design; as a result, it cannot offer Black Start capability, unlike Voltage Sourced Converters. However LCC technology offers lower losses and hence more efficient power transfer. 
      </Typography>
    </>
  );
}