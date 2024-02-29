import * as React from 'react';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

export default function Forest({project, ...props}) {


  return (
    <>
      <Typography component='h4' variant='h4'>
        The Forest
      </Typography>
      <FadeRuleDark marginBottom="2em"/>    
      <Typography paragraph >
        A PCCA intern Samantha Loney chose to use her experience and heritage to create a website that ties her Metis heritage to forests and the place that they hold in society. This work is an extension of her ongoing <a href="https://podcastle.org/people/samantha-loney/">podcast series</a>
      </Typography>
      <Typography paragraph >
        The platform on which Samantha has been doing this work is a communication platform that is being used in a number of forthcoming projects and is being extended to allow communication by communities with collections of scanned objects. Using tools such as drones and phone-based scanning software, trees and other objects of interest are being represented on the platform as images, and soon to be 3D models of the ojects. These are presented in frame with a videoconference tool which allows participants to flexibly groups themselves around the objects that they want to discuss.
      </Typography>
      <Typography paragraph >
        We invite you to watch a narrated tour of TheForest below, or to join the <a href="https://app.spatial.chat/s/TheForest">live platform</a> and experience it for yourself!
      </Typography>
      <iframe src="https://player.vimeo.com/video/916867819?h=d4d53d831e" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="sharingforest"></iframe>
    </>
  );
}