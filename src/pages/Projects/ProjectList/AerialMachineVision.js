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
        Knowledge about the world around us has never been easier to achieve, but it still requires much technical skill in order to put it together into insight. We use both drone-based and satellite-based image capture techniques to record the world around us and make it available to communities. 
        </Grid>

        <Grid item component="p" xs={12} md={6}>
        The DJI Mavic Pro 3 multispectral allows our students to collect imagery not just in the visible spectrum, but also to analyze things such as crop viability, dryness indices, forest fire risk, and other essential measures of the health of their ecosystem. 
        </Grid>

        <Grid item xs={12} md={6} component="img" src={MAV3M} className="card-image"/>
        <Grid item xs={12} component="img" src={s2_infographic} className="card-image"/>

        <Grid item component="p" xs={12}>
        We pair this with advanced satellite analytics, both with data from the European Space Agency, as well as with our collaborators at EarthDaily Analytics, a Vancouver-based satellite company. The analysis of satellite imagery has complexities that we teach our students how to overcome. 
        </Grid>

        <Grid item xs={12} md={4} component="img" src={classify_rgb} className="card-image"/>
        <Grid item xs={12} md={4} component="img" src={minesegsat} className="card-image"/>
        <Grid item xs={12} md={4} component="img" src={remote_sensing} className="card-image"/>


        <Grid item component="p" xs={12}>
        From scientific papers to community exercises with organizations such as the First Nation Emergency Services Society, our students can both publish and make their communities safer. 
        </Grid>

      </Grid>
    </Container>

  );
}