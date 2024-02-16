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
        Belcher is a village in Caddo Parish, Louisiana, United States. The population was 263 at the 2010 census. It is part of the Shreveport- Bossier city metropolitan statistical area. 
      </Typography>
      <Typography paragraph>
        Previously named Horseshoe after the bayou that runs through the town, Belcher was renamed in 1899 after James Clinton Belcher, a former confederate soldier and overseer of Wild Lucia plantation.
      </Typography>
    </>
  );
}