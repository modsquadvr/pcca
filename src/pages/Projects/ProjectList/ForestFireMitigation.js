import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";
import GridPhoto from "components/GridPhoto";

import mitigation from "assets/photos/projects/ForestFire/FNESS_mitigation.jpg"
import postburn from "assets/photos/projects/ForestFire/FNESS_postburn.jpg"
import program from "assets/photos/projects/ForestFire/FNESS_program.jpg"
import training from "assets/photos/projects/ForestFire/FNESS_training.jpg"
import johnscreekfire from "assets/photos/projects/ForestFire/johns_creek_fire.jpg"
import community from "assets/photos/projects/ForestFire/community.png"


export default function ForestFireMitigation({project, ...props}) {


  return (
    <>
      <Typography component='h4' variant='h4'>
        Forest Fire Mitigation
      </Typography>
      <FadeRuleDark/>
      <Grid container spacing={4} justifyContent="center">

        <Grid item xs={12}>
          <Container component="img" src={postburn} sx={{maxHeight:"600px", width:"auto"}}/>
        </Grid>

        <Grid item xs={12}>
          <Typography paragraph textAlign="left">
            Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
          </Typography>
        </Grid>

        <GridPhoto size={4} photo={training}/>
        <GridPhoto size={4} photo={program}/>
        <GridPhoto size={4} photo={mitigation}/>

        <Grid item xs={12}>
          <Typography paragraph textAlign="left">
            There are only around 2000 types of beetles known to live in off-world colonies. The reasons why so few have managed to make the adaptations to space travel and other gravitational fields is poorly understood, but is thought to be related to the surface tension of water and its impacts on how exoskeletons have evolved to keep water contained within the creature. The beetle which seems to have made the most successful adaptation to life off-world is the Lunar Must Beetle[2], commonly known by Lunar residents as "heebie-jeebies", and which tends to colonize any relatively undisturbed fibers and textiles, such as disused carpeting or clothing. 
          </Typography>
        </Grid>

        <GridPhoto size={6} photo={johnscreekfire}/>
        <Grid item xs={12} md={6}>
          <Typography paragraph textAlign="left">
            Why Orlando still hasn't written back is beyond me. The pigs won't enjoy much of the ritual, I am sure of it. So far they've been quick to find any possible escape route they can, in order to avoid being eaten. Perhaps Orlando has done the same? I've still got his pair of Sunday Corduroy Slacks, and cannot imagine him leaving them behind forever. 
          </Typography>
        </Grid>


        <Grid item xs={12} md={6}>
          <Typography component="h5" variant="h5" textAlign="center">
            <Link href="https://www.fness.bc.ca/core-programs/mitigation/" target="_blank" rel="noopener noreferrer" >Visit the FNESS Website</Link>
          </Typography>
        </Grid>
        <GridPhoto size={12} photo={community}/>
      </Grid>
    </>
  );
}