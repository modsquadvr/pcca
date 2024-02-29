import * as React from 'react';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

export default function MocapInDance({project, ...props}) {


  return (
    <>
      <Typography component='h4' variant='h4'>
        Mocap in Dance
      </Typography>
      <FadeRuleDark marginBottom="2em"/>    
      <Typography paragraph>
        There are several projects which made use of both the motion capture facilities at <a href="">The Sawmill</a> as well as a Rokoko motion capture suit at the University of Victoria. PCCA led a program to integrate these capabilities into student projects.
      </Typography>
      <Typography paragraph>
        The video below is a project by one of the summer students to use the motion capture suit to input motion data to an Unreal Engine character of a silhouette. The student then performed a dance routine with that silhouette amplifying her motions.
      </Typography>
      <iframe src="https://player.vimeo.com/video/917750487?h=e22e099edc" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="sofiia"></iframe>
    </>
  );
}