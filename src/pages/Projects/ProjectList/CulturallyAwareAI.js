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
import culturallyAwarePDF from "assets/photos/projects/culturallyawareai/Certificate of Completion Culturally Aware AI.pdf";

export default function CulturallyAwareAI({project, ...props}) {

  return (
    <Container>
      <Grid container spacing={4} rowSpacing={{xs:3, lg:10}} justifyContent="center" alignItems="flex-start">

        <Grid item xs={12}>
          <Box sx={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <embed
              src={culturallyAwarePDF}
              type="application/pdf"
              width="100%"
              height="100%"
              className="card-image"
            />
          </Box>
        </Grid>

        <Grid item component="p" xs={12}>
        Our Culturally Aware AI initiative focuses on developing artificial intelligence systems that respect and incorporate diverse cultural perspectives, values, and knowledge systems. We work with Indigenous communities and other cultural groups to ensure AI technologies are developed with cultural sensitivity and awareness.
        </Grid>

        <Grid item component="p" xs={12}>
        This project addresses the critical need for AI systems that can understand and respond appropriately to cultural contexts, avoiding biases and misrepresentations that have historically been problematic in technology development. By embedding cultural awareness into AI from the ground up, we aim to create more inclusive and respectful technological solutions.
        </Grid>

        <Grid item component="p" xs={12} md={6}>
        Our approach involves collaborative research with cultural knowledge keepers, linguists, and community representatives to develop frameworks and methodologies that can guide culturally aware AI development. This includes work on natural language processing that respects Indigenous languages, computer vision systems that recognize culturally significant objects appropriately, and decision-making algorithms that incorporate diverse value systems.
        </Grid>

        <Grid item component="p" xs={12} md={6}>
        Through workshops, training programs, and direct community engagement, we're building capacity for Indigenous and other cultural communities to participate actively in shaping how AI technologies represent and interact with their cultural knowledge and practices. This ensures that technological advancement happens with communities rather than simply about them.
        </Grid>

        <Grid item component="p" xs={12}>
        The Culturally Aware AI project represents our commitment to ensuring that the future of artificial intelligence is one that honors and respects cultural diversity, creating technologies that serve all communities equitably and appropriately.
        </Grid>

      </Grid>
    </Container>
  );
}