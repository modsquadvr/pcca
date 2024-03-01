import * as React from 'react';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// eslint-disable-next-line
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

export default function MocapInDance({project, ...props}) {


  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">
        <Grid item xs={12} component="p">
          There are several projects which made use of both the motion capture facilities at <Link target="_blank" rel="noopener noreferrer" href="https://www.thesawmill.ca/">The Sawmill</Link> as well as a Rokoko motion capture suit at the University of Victoria. PCCA led a program to integrate these capabilities into student projects.
        </Grid>
        <Grid item xs={12} component="p">
        The video below is a project by one of the summer students to use the motion capture suit to input motion data to an Unreal Engine character of a silhouette. The student then performed a dance routine with that silhouette amplifying her motions.
        </Grid>
        <Grid item xs={12}> 
          <iframe src="https://player.vimeo.com/video/917750487?h=e22e099edc" frameBorder="0" allow="fullscreen" allowFullScreen title="sofia"></iframe>
        </Grid>
      </Grid>
    </Container>
  );
}