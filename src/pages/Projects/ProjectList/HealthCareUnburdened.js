import * as React from 'react';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

import grandkidLaptop from "assets/photos/projects/HealthCare/kid-using-laptop-with-granny.jpg"


export default function HealthCareUnburdened({project, ...props}) {


  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">

        <Grid item xs={12} component="img" src={grandkidLaptop} className="card-image"/>

        <Grid item component="p" xs={12}>
        We work with partners in British Columbia and across Canada on topics relating to human health, both in emergency services and information resources to allow Canadians to access and consider information about their own health. Some of these AI tools allow us to reduce the burden on Canada's public health care systems. 
        </Grid>

        <Grid item component="p" xs={12}>
        These projects include efforts to assist with elder care, websites in coordination with the Vancouver Division of Family Practice, and efforts relating to emergency response. 
        </Grid>


        <Grid item component="p" xs={12}>
          
        </Grid>


        <Grid item xs={12} md={6}>
          <Typography component="h5" variant="h5" textAlign="center">
            <Link href="https://grandkid.club/" target="_blank" rel="noopener noreferrer" >Visit the Project Website</Link>
          </Typography>
        </Grid>

      </Grid>
    </Container>
  );
}