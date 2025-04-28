import * as React from 'react';
// eslint-disable-next-line
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// eslint-disable-next-line
import Link from '@mui/material/Link';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

// Import the PDF file
import citizenSciencePDF from "assets/photos/projects/citizenscience/Certificate of Completion Citizen Science.pdf";

export default function CitizenScience({project, ...props}) {

  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">

        <Grid item xs={12}>
          <Box sx={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <embed
              src={citizenSciencePDF}
              type="application/pdf"
              width="100%"
              height="100%"
              className="card-image"
            />
          </Box>
        </Grid>

        <Grid item component="p" xs={12}>
        Our Citizen Science initiative empowers communities to participate directly in scientific research and data collection. By engaging non-professional scientists in the research process, we bridge the gap between academic research and public participation, creating more inclusive and comprehensive scientific outcomes.
        </Grid>

        <Grid item component="p" xs={12}>
        This project recognizes that valuable scientific insights can come from diverse sources and perspectives. By democratizing the scientific process, we enable broader participation in addressing environmental, social, and technological challenges that affect communities directly.
        </Grid>

        <Grid item component="p" xs={12} md={6}>
        We provide training, tools, and platforms that allow community members to collect, analyze, and share data about their local environments. This includes monitoring water quality, tracking wildlife populations, documenting climate change impacts, and gathering other valuable environmental data that might otherwise be overlooked by traditional research methods.
        </Grid>

        <Grid item component="p" xs={12} md={6}>
        Through workshops, educational programs, and digital platforms, we're building a network of citizen scientists who contribute meaningful data while developing their own scientific literacy and engagement. This collaborative approach ensures that scientific research is more relevant, accessible, and responsive to community needs and concerns.
        </Grid>

        <Grid item component="p" xs={12}>
        The Citizen Science project represents our commitment to making science more inclusive, participatory, and impactful. By bringing together professional scientists and community members, we're creating a more holistic approach to understanding and addressing the complex challenges of our time.
        </Grid>

      </Grid>
    </Container>
  );
}