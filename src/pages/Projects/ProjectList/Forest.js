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
        The Moyle Interconnector is a 500 megawatt (MW) HVDC link between Scotland and Northern Ireland, running between Auchencrosh in Ayrshire and Ballycronan More in County Antrim. It went into service in 2001 and is owned and operated by Mutual Energy.
      </Typography>
      <Typography paragraph >
        The Moyle Interconnector has a capacity of 500 MW and is of dual monopole configuration. Each pole consists of a coaxial 250 kV DC cable with integrated return conductors (IRC), each cable having a transmission capacity of 250 MW. The LV return conductor elements of the IRCs have suffered failures (see below), and their function was restored by laying new separate metallic return conductors (MRCs) in 2016. The converter stations were designed and constructed by Siemens, and were the first to feature Siemens light-triggered thyristors.
      </Typography>
      <Typography paragraph >
        Moyle is a Line Commutated Converter (LCC) design; as a result, it cannot offer Black Start capability, unlike Voltage Sourced Converters. However LCC technology offers lower losses and hence more efficient power transfer. 
      </Typography>
    </>
  );
}