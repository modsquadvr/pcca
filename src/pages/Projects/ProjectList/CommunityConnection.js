import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

import community from "assets/photos/projects/ForestFire/community.png"
import mitigation from "assets/photos/projects/ForestFire/FNESS_mitigation.jpg"


export default function CommunityConnection({project, ...props}) {


  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">
        <Grid item xs={12} component="img" src={community} className="card-image"/>
        <Grid item component="p" xs={12}>
        Working with communities is the heart of our organization. We work with high school students from the Verna J. Kirkness Society. We work with community firefighters and protection agencies with the First Nations Emergency Services Society. We work with government organizations and universities. We even work with foreign communities through collaborators in the United States and Mexico. 
        </Grid>
        <Grid item xs={12} component="img" src={mitigation} className="card-image"/>

        <Grid item component="p" xs={12}>
        In each of these communities, there are fundamental problems to be resolved and technologies to be applied to those solutions. We make the technologies as easy as possible while still allowing our community collaborators to determine what solutions they want to pursue. 
        </Grid>
        <Grid item component="p" xs={12}>
        In some cases, these solutions require programming and will teach basic programming concepts. In others, they'll require using different software packages, and we teach those software packages. In all of them, though, there is a balance between the technical training we provide and the community solutions that we solve. 
        </Grid>
        <Grid item component="p" xs={12}>
        We are always looking for new communities to work with. If you are interested in working with us, please reach out to us.
        </Grid>
      </Grid>
    </Container>
  );
}