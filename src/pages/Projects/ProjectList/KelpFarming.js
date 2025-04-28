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
        Some of our community work has involved collaboration with the Pacific Seaweed Industry Alliance, or PSIA. This is an organization of kelp production companies and communities. 
        </Grid>

        <Grid item xs={12} md={4} component="img" className="card-image" src={lecture}/>
        <Grid item xs={12} md={4} component="img" className="card-image" src={derekAndy}/>
        <Grid item xs={12} md={4} component="img" className="card-image" src={aldynView}/>

        <Grid item xs={12} component="p">
        We were able to take students in a 400 level Distributed Systems class and apply their knowledge of computational systems and satellite analytics in order to create tools to enable us to do site selection for kelp farms in ways that make sense with both technology and on the ground knowledge. 
        </Grid>


        <Grid item xs={12} component="p">
        Some of our students had the opportunity to take a boat trip out to visit Kelp Farms and to visit the Bamfield Research Center, where understanding the science of kelp farming practices is advanced. Thanks for this opportunity to the Nu-Chah-Nulth nations who acted as our hosts on their territory. 
        </Grid>


        <Grid item xs={12} md={6}>
          <Typography component="h5" variant="h5" textAlign="center">
           
          </Typography>
        </Grid>

        <Grid item xs={12} component="img" className="card-image" src={group} />

      </Grid>
    </Container>
  );
}