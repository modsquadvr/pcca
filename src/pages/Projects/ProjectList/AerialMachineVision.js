import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";
import GridPhoto from "components/GridPhoto";

// eslint-disable-next-line
import classify_rgb from "assets/photos/projects/AerialVision/classify_rgb.png"
// eslint-disable-next-line
import MAV3M from "assets/photos/projects/AerialVision/MAV3M.jpg"
// eslint-disable-next-line
import minesegsat from "assets/photos/projects/AerialVision/minesegsat.png"
// eslint-disable-next-line
import ortho_multi from "assets/photos/projects/AerialVision/ortho_multi.png"
// eslint-disable-next-line
import remote_sensing from "assets/photos/projects/AerialVision/remote_sensing.png"
// eslint-disable-next-line
import s2_infographic from "assets/photos/projects/AerialVision/Sentinel-2-infographic-tm.jpg"


export default function AerialMachineVision({project, ...props}) {


  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">

        <Grid item xs={12}>
          <Container component="img" src={ortho_multi} />
        </Grid>

        <Grid item xs={12}>
          <Container component="p" sx={{textAlign:"left"}}>
            xCalosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
          </Container>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography paragraph textAlign="left">
            Drip drop lemon drop there's a candy in my pocket sticky sticky. Will you come out to play with me, I need someone to gnaw the thistles three icky icky. Palomino pantomime there's a rhyme for Alice's climb. Up the well of ticky-tacky sway they march in numbers one and away. Don't trust them! Yore, we have no need for swarthy worthy words upon this moor. Say no moray there's plenty of here to stay for when I'm planting an everweiss I'll let it go a galloping through the woods here today. Just pray, pray, pray for me that I can find a sweet song to call home, for 
          </Typography>
        </Grid>
        <GridPhoto size={6} photo={MAV3M}/>

        <Grid item xs={12}>
          <Container component="img" src={s2_infographic} />
        </Grid>

        <Grid item xs={12}>
          <Container component="p" sx={{textAlign:"left"}}>
            Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
          </Container>
        </Grid>

        <GridPhoto size={4} photo={classify_rgb}/>
        <GridPhoto size={4} photo={minesegsat}/>
        <GridPhoto size={4} photo={remote_sensing}/>


        <Grid item xs={12}>
          <Container component="p" sx={{textAlign:"left"}}>
            Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
          </Container>
        </Grid>


        <Grid item xs={12} md={6}>
          <Typography component="h5" variant="h5" textAlign="center">
            <Link href="https://im4lab.com/virtualproduction" target="_blank" rel="noopener noreferrer" >Visit the Project Website</Link>
          </Typography>
        </Grid>


      </Grid>
    </Container>

  );
}