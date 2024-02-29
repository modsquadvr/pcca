import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

  // eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

import im4VR from "assets/photos/projects/IM4VR/im4-vr.jpeg"
import im4Setup from "assets/photos/projects/IM4VR/im4-vr-setup.jpg"
import im4Logos from "assets/photos/projects/IM4VR/im4-vr-logos.png"



export default function Im4VirtualProduction({project, ...props}) {


  return (
    <>
    <Typography component='h4' variant='h4'>
      The IM4 Virtual Production Program
    </Typography>
    <FadeRuleDark/>
    <Container>
      <Grid container spacing={4} rowSpacing={10} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box className="card-image" component="img" src={im4VR} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph textAlign="left">
            In the summer of 2023, students at the University of Victoria had the opportunity to support 24 indigenous filmmakers who were taking part in the Indigenous Matriarchs Four Virtual Production certificate program at Emily Carr University. This project took experienced filmmakers and introduced them to <a href="https://www.unrealengine.com/">Unreal Engine</a> and how to use it to create compelling visions for making films.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
        <Stack justifyContent="space-between" alignItems="center" sx={{height:"100%"}}>
            <Typography paragraph textAlign="left">
              The IM4 students have each produced a short film that in some cases are complete works in themselves, in others are a vision demo towards larger works yet to come. The University of Victoria students, working under internship programs with PCCA and using stage facilities with <a href="https://www.thesawmill.ca/">Sawmill Studios</a>, were technical support to the IM4 students and provided motion captures to animate the film visions.
            </Typography>
            <Typography component="h5" variant="h5" textAlign="left" gutterBottom >
              <Link href="https://im4lab.com/virtualproduction" target="_blank" rel="noopener noreferrer" >Visit the Project Website</Link>
            </Typography>
        </Stack>


        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="card-image" component="img" src={im4Setup} />
        </Grid>

        <Grid item xs={12}>
            <iframe src="https://player.vimeo.com/video/917752927?h=6a5266d410" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="IM4Trailer"></iframe>
        </Grid>
        <Grid item xs={12}>
          <Box component="img" src={im4Logos} />
        </Grid>
      </Grid>
    </Container>

      

    </>

  );
}