import * as React from 'react';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

import postburn from "assets/photos/projects/ForestFire/FNESS_postburn.jpg"
import program from "assets/photos/projects/ForestFire/FNESS_program.jpg"
import training from "assets/photos/projects/ForestFire/FNESS_training.jpg"
import johnscreekfire from "assets/photos/projects/ForestFire/johns_creek_fire.jpg"


export default function ForestFireMitigation({project, ...props}) {


  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">

        <Grid item xs={12} component="img" src={postburn} className="card-image"/>

        <Grid item component="p" xs={12}>
        With the First Nations Emergency Services Society and the BC Wildfire Service, we use satellite analytics to compute the likelihood of forest fires and ways of mitigating those fires. 
        </Grid>

        <Grid item xs={12} component="img" src={training} className="card-image"/>

        <Grid item component="p" xs={12}>
        This involves some complex decisions on burnable mass in the forests, type of trees, dryness of trees, time of year, topography, and nearby communities that might be affected. Computing platforms and satellite analytics make operating on these complex decisions easier. 
        </Grid>

        <Grid item xs={12} component="img" src={program} className="card-image"/>

        <Grid item component="p" xs={12}>
        There are traditional forest management practices, such as cultural burning practices, which historically have left the forests in a less combustible state than they are found today. A return to some of these historical practices may help assist in control of forest fire activity in British Columbia. 
        </Grid>


        <Grid item component="p" xs={12} md={6}>
        The use of satellite analytics for monitoring the state of the forests is important not just for forest fire control, but also for new programs to enable communities to take advantage of forest carbon capture in exchange for carbon credits. 
          <br /><br />
          <Link href="https://www.fness.bc.ca/core-programs/mitigation/" target="_blank" rel="noopener noreferrer" >Visit the FNESS Website</Link>
        </Grid>

        <Grid item xs={12} md={6} component="img" src={johnscreekfire} className="card-image"/>

      </Grid>
    </Container>
  );
}