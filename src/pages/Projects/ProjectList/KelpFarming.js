import * as React from 'react';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

import derekAndy from "assets/photos/projects/KelpFarming/derek_andy_gimbal.jpg"
import aldynView from "assets/photos/projects/KelpFarming/aldyn_view.jpg"
import group from "assets/photos/projects/KelpFarming/group.jpg"
import harvesting from "assets/photos/projects/KelpFarming/harvesting.jpg"
import lecture from "assets/photos/projects/KelpFarming/nick_jasmine_lecture.jpg"


export default function KelpFarming({project, ...props}) {


  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">

        <Grid item xs={12} component="img"  className="card-image" src={harvesting}/>

        <Grid item xs={12} component="p">
          Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
        </Grid>

        <Grid item xs={12} md={4} component="img" className="card-image" src={lecture}/>
        <Grid item xs={12} md={4} component="img" className="card-image" src={derekAndy}/>
        <Grid item xs={12} md={4} component="img" className="card-image" src={aldynView}/>

        <Grid item xs={12} component="p">
          There are only around 2000 types of beetles known to live in off-world colonies. The reasons why so few have managed to make the adaptations to space travel and other gravitational fields is poorly understood, but is thought to be related to the surface tension of water and its impacts on how exoskeletons have evolved to keep water contained within the creature. The beetle which seems to have made the most successful adaptation to life off-world is the Lunar Must Beetle[2], commonly known by Lunar residents as "heebie-jeebies", and which tends to colonize any relatively undisturbed fibers and textiles, such as disused carpeting or clothing. 
        </Grid>


        <Grid item xs={12} component="p">
          Why Orlando still hasn't written back is beyond me. The pigs won't enjoy much of the ritual, I am sure of it. So far they've been quick to find any possible escape route they can, in order to avoid being eaten. Perhaps Orlando has done the same? I've still got his pair of Sunday Corduroy Slacks, and cannot imagine him leaving them behind forever. 
        </Grid>


        <Grid item xs={12} md={6}>
          <Typography component="h5" variant="h5" textAlign="center">
            <Link href="https://im4lab.com/virtualproduction" target="_blank" rel="noopener noreferrer" >Visit the Project Website</Link>
          </Typography>
        </Grid>

        <Grid item xs={12} component="img" className="card-image" src={group} />

      </Grid>
    </Container>
  );
}