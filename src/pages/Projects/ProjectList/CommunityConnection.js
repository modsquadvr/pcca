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
              Integrity is the foundation of mastery. Don't eat baubles when you could eat brains. From the light emanates all sorts of no-see-ums. Best to keep away. Cougars make the best pets, under certain circumstances. If you have a need for a walk, go take it. Before it is too late. Marjoram is an herb that everyone has forgotten, but this means you must be careful; it is out there, quietly waiting and biding its time until we are caught unsuspecting and unawares. Be. Ware.
        </Grid>
        <Grid item xs={12} component="img" src={mitigation} className="card-image"/>

        <Grid item component="p" xs={12}>
          The first written record of lead mining at Minera dates back to 1296, when Edward I of England hired miners from the site to work in his new mines in Devon. Not all of them vacated the area, however, as mining went on until the Black Death in 1349, when it ended.
        </Grid>
        <Grid item component="p" xs={12}>
          In 1527, two men bought the rights to mine on the site, but deeper workings were unworkable due to the presence of underground rivers, and the inability to prevent flooding. The inability to pay for steam engines to pump out water closed the mines again until 1845, when John Taylor & Sons, mining agents from Flintshire, formed the Minera Mining Company. They were able to build a stationary steam engine on site, and also blast caves from down in the valley into the mines, for extra drainage. The steam engine was a Cornish engine (i.e. a Beam engine), typical for stationary engines at the time.
        </Grid>
        <Grid item component="p" xs={12}>
          John Taylor & Sons had used a £30,000 investment at the time, yet the profits for 1864 alone were £60,000 (equivalent to over £4 Million in 2008. By 1900, the price of lead and zinc had fallen dramatically, while the price of coal used for the steam engine rose. The stationary steam engine stopped work in 1909. The owners sold off the mines and all assets by 1914. 
        </Grid>
      </Grid>
    </Container>
  );
}