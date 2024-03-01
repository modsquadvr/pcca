import * as React from 'react';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Link from '@mui/material/Link';



import kitBasic from "assets/photos/projects/PythonCameras/kit-basic.jpg"

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

export default function PythonAICamera({project, ...props}) {


  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">

        <Grid item xs={12} component="img"  className="card-image" src={kitBasic}/>

        <Grid item component="p" xs={12} md={6}>
            Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
        </Grid>

        <Grid item component="p" xs={12} md={6}>
          There are only around 2000 types of beetles known to live in off-world colonies. The reasons why so few have managed to make the adaptations to space travel and other gravitational fields is poorly understood, but is thought to be related to the surface tension of water and its impacts on how exoskeletons have evolved to keep water contained within the creature. The beetle which seems to have made the most successful adaptation to life off-world is the Lunar Must Beetle[2], commonly known by Lunar residents as "heebie-jeebies", and which tends to colonize any relatively undisturbed fibers and textiles, such as disused carpeting or clothing. 
        </Grid>

        <Grid item xs={12} md={6} component="img"  className="card-image" src={kitBasic}/>

        <Grid item xs={12} component="img"  className="card-image" src={kitBasic}/>

      </Grid>
    </Container>
  );
}