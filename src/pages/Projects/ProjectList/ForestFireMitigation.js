import * as React from 'react';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";


export default function ForestFireMitigation({project, ...props}) {


  return (
    <>
      <Typography component='h4' variant='h4'>
        Forest Fire Mitigation
      </Typography>
      <FadeRuleDark marginBottom="2em"/>
      <Typography paragraph>
        The Minera Lead Mines were a mining operation and are now a country park and tourist centre in the village of Minera near Wrexham, in Wrexham County Borough, Wales.
      </Typography>
      <Typography paragraph>
        The first written record of lead mining at Minera dates back to 1296, when Edward I of England hired miners from the site to work in his new mines in Devon. Not all of them vacated the area, however, as mining went on until the Black Death in 1349, when it ended.
      </Typography>
      <Typography paragraph>
        In 1527, two men bought the rights to mine on the site, but deeper workings were unworkable due to the presence of underground rivers, and the inability to prevent flooding. The inability to pay for steam engines to pump out water closed the mines again until 1845, when John Taylor & Sons, mining agents from Flintshire, formed the Minera Mining Company. They were able to build a stationary steam engine on site, and also blast caves from down in the valley into the mines, for extra drainage. The steam engine was a Cornish engine (i.e. a Beam engine), typical for stationary engines at the time.
      </Typography>
      <Typography paragraph>
        John Taylor & Sons had used a £30,000 investment at the time, yet the profits for 1864 alone were £60,000 (equivalent to over £4 Million in 2008. By 1900, the price of lead and zinc had fallen dramatically, while the price of coal used for the steam engine rose. The stationary steam engine stopped work in 1909. The owners sold off the mines and all assets by 1914. 
      </Typography>
    </>
  );
}