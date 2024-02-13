import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


  // eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";
import Link from '@mui/material/Link';
import im4VR from "assets/photos/im4-vr.jpeg"
import im4Setup from "assets/photos/im4-vr-setup.jpg"
import im4Logos from "assets/photos/im4-vr-logos.png"



export default function Im4VirtualProduction({project, ...props}) {


  return (
    <>
    <Typography component='h4' variant='h4'>
      The IM4 Virtual Production Program
    </Typography>
    <FadeRuleDark marginBottom="2em"/>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Container component="img" src={im4VR} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography paragraph textAlign="left">
          Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography paragraph textAlign="left">
          Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Container component="img" src={im4Setup} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography component="h5" variant="h5" textAlign="center">
          <Link href="https://im4lab.com/virtualproduction" target="_blank" rel="noopener noreferrer" >Visit the Project Website</Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Container component="img" src={im4Logos} />
      </Grid>
    </Grid>
      

    </>

  );
}