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
        In collaboration with CEWIL Canada and the Victoria Makerspace, we were able to put on a project looking at small embedded devices running Python and the use of those devices for teaching introductory programming techniques. 
        </Grid>

        <Grid item component="p" xs={12} md={6}>
        With embedded devices, it is often easier to learn these programming techniques without the complex stack that one uses in modern web development and in programming a modern computer. 
        </Grid>

        <Grid item xs={12} md={6} component="img"  className="card-image" src={kitBasic}/>

        <Grid item xs={12} component="img"  className="card-image" src={kitBasic}/>

      </Grid>
    </Container>
  );
}