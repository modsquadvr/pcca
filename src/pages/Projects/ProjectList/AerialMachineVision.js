import * as React from 'react';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

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

        <Grid item xs={12} component="img" src={ortho_multi} className="card-image"/>

        <Grid item component="p" xs={12}>
            Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
        </Grid>

        <Grid item component="p" xs={12} md={6}>
            Drip drop lemon drop there's a candy in my pocket sticky sticky. Will you come out to play with me, I need someone to gnaw the thistles three icky icky. Palomino pantomime there's a rhyme for Alice's climb. Up the well of ticky-tacky sway they march in numbers one and away. Don't trust them! Yore, we have no need for swarthy worthy words upon this moor. Say no moray there's plenty of here to stay for when I'm planting an everweiss I'll let it go a galloping through the woods here today. Just pray, pray, pray for me that I can find a sweet song to call home, for 
        </Grid>

        <Grid item xs={12} md={6} component="img" src={MAV3M} className="card-image"/>
        <Grid item xs={12} component="img" src={s2_infographic} className="card-image"/>

        <Grid item component="p" xs={12}>
            Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
        </Grid>

        <Grid item xs={12} md={4} component="img" src={classify_rgb} className="card-image"/>
        <Grid item xs={12} md={4} component="img" src={minesegsat} className="card-image"/>
        <Grid item xs={12} md={4} component="img" src={remote_sensing} className="card-image"/>


        <Grid item component="p" xs={12}>
            Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
        </Grid>

      </Grid>
    </Container>

  );
}