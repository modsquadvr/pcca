import * as React from 'react';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

import grandkidLaptop from "assets/photos/projects/HealthCare/kid-using-laptop-with-granny.jpg"


export default function HealthCareUnburdened({project, ...props}) {


  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">

        <Grid item xs={12} component="img" src={grandkidLaptop} className="card-image"/>

        <Grid item component="p" xs={12}>
            Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
        </Grid>

        <Grid item component="p" xs={12}>
          There are only around 2000 types of beetles known to live in off-world colonies. The reasons why so few have managed to make the adaptations to space travel and other gravitational fields is poorly understood, but is thought to be related to the surface tension of water and its impacts on how exoskeletons have evolved to keep water contained within the creature. The beetle which seems to have made the most successful adaptation to life off-world is the Lunar Must Beetle[2], commonly known by Lunar residents as "heebie-jeebies", and which tends to colonize any relatively undisturbed fibers and textiles, such as disused carpeting or clothing. 
        </Grid>


        <Grid item component="p" xs={12}>
          Why Orlando still hasn't written back is beyond me. The pigs won't enjoy much of the ritual, I am sure of it. So far they've been quick to find any possible escape route they can, in order to avoid being eaten. Perhaps Orlando has done the same? I've still got his pair of Sunday Corduroy Slacks, and cannot imagine him leaving them behind forever. 
        </Grid>


        <Grid item xs={12} md={6}>
          <Typography component="h5" variant="h5" textAlign="center">
            <Link href="https://grandkid.club/" target="_blank" rel="noopener noreferrer" >Visit the Project Website</Link>
          </Typography>
        </Grid>

      </Grid>
    </Container>
  );
}