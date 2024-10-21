import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


import BasePage from "../BasePage"
import { FadeRuleLight } from "components/FadeRule";

import "./about.css"
import ocean from 'assets/photos/ocean-1920x1280.png';


function Hero() {
  // eslint-disable-next-line
  const theme = useTheme();
  return (
    <Container className="hero" disableGutters={true} maxWidth="1">
      <Stack className="title bg" sx={{maxWidth:1}} spacing={2} justifyContent="flex-end">
        <Typography
          component="h3"
          variant="h3"
          align="left"
          color={theme.palette.primary.light}
        >
          About Us
        </Typography>
      </Stack>
      <FadeRuleLight/>
    </Container>
  )
}

export default function Mapping() {
  return (
    <BasePage className="mapping">
      <Hero />
      <Container sx={{m:0, w:1, maxWidth:1}} className="infodump light about">
        <Grid container spacing={4} className="infodump-grid" direction="row">

          <Grid item xs={12} md={6}>
          <Box
              component="img"
              sx={{
                maxWidth:"1",
                maxHeight:"600px",
                mr:0
              }}
              title="Powell River across the strait, taken by Andy Wynden"
              alt="A calm seascape with smooth mottled grey rocks in the foreground. Across the water there are mountains in the far distance. The photograph is taken in the early evening, and there are wisps of clouds all across the sky in various shades of blue and grey, complementing the blues and grays of the rocks and the ocean. "
              src={ocean}
            />


          </Grid>
          <Grid item 
                xs={12} md={6} 
                textAlign="left"
          >
            <Box className="blurb">
              <Typography variant="body-1">
                  <p>
                    The Pacific Coastal Computing Association (PCCA) incorporated in 2020 as a non-profit based in Vancouver, B.C., Canada. PCCA works with partners to promote innovation, diversity & inclusivity in capacity building and positive change in education, the arts, environment, health & wellness and technology. 
                  </p>
                  <p>
                    Our approach to digital transformation advisory and impact project interweaves strategic thinking of IT infrastructure, tools and technologies alongside the advanced diverse skills needed.
                  </p>
                  <p>
                    Our society purpose: An interdisciplinary organization devoted to applied research, education and capacity building associated with computational, and computing-for-good, approaches to contemporary applications in health, environment and the Arts & digital media. Goals include establishing sustainable practices for technical topics (e.g. architectures, scalability, algorithmic correctness, data sharing), evolving cross-sector and or cross-cultural frameworks for collaboration and storytelling, and innovating new models for learning.
                  </p>
                  <p>
                  As a non-profit, PCCA's mandate is to ensure the maximum possible value of the financial contributions made go directly to supporting the students and communities we serve, and or the education and applied research projects/programs we participate in or support. As such, our policy is to uphold a zero administrative overhead on outgoing financial contributions.
                  </p>
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </Container>
      <Container sx={{m:0, w:1, maxWidth:1}} className="infodump dark about">
      
        <Grid container spacing={4} className="infodump-grid" direction="row">
          <Grid item 
                xs={12} md={6} 
                textAlign="right"
          >
          <Box className="blurb">
              <Typography variant="h4">
                OTHER INDIGENOUS MAPPING INITIATIVES
              </Typography>
              <Typography variant="body-1">
                <section>
                  <ul>
                    <li>
                      <strong>Indigenous Mapping Collective - The Firelight Group</strong><br>
                      <a href="https://www.indigenousmaps.com" target="_blank">www.indigenousmaps.com</a><br>
                      <em>Providing Indigenous Peoples, Nations, and organizations with the tools and training to map their lands, share their stories, and decolonize place and space.</em><br>
                      - Indigenous Mapping Collective Google Earth Map: 
                      <a href="https://blog.google/intl/en-ca/products/explore-get-answers/indigenous-lands-in-canada-are-now-in/" target="_blank">Explore Indigenous Lands in Canada</a>
                    </li>
                    <li>
                      <strong>Geographic Indigenous Futures Lab</strong><br>
                      <a href="https://geographicindigenousfutures.ca/" target="_blank">https://geographicindigenousfutures.ca</a><br>
                      <em>"At the heart of the GIF Lab’s mission is to bring control of geographic research back into the hands of communities."</em><br>
                  </ul>
                  </section>
              </Typography>
            </Box>

          </Grid>
          <Grid item xs={12} md={6}>
          <Box
              component="img"
              sx={{
                maxWidth:"1",
                maxHeight:"600px",
                mr:0
              }}
              title="Powell River across the strait, taken by Andy Wynden"
              alt=""
              src={ocean}
            />
          </Grid>
        </Grid>
      </Container>

      <Container sx={{m:0, w:1, maxWidth:1}} className="infodump light about">
        <Grid container spacing={4} className="infodump-grid" direction="row">

          <Grid item xs={12} md={6}>
          <Box
              component="img"
              sx={{
                maxWidth:"1",
                maxHeight:"600px",
                mr:0
              }}
              title="Powell River across the strait, taken by Andy Wynden"
              alt=""
              src={ocean}
            />


          </Grid>
          <Grid item 
                xs={12} md={6} 
                textAlign="left"
          >
            <Box className="blurb">
              <Typography variant="h4">
                    INDIGENOUS MAPS AND RESOURCES
              </Typography>
              <Typography variant="body-1">
                <section>
                  <ul>
                    <li>
                      <strong>First Nation Profiles Interactive Map</strong><br>
                      Government of Canada: Crown-Indigenous Relations and Northern Affairs Canada<br>
                      <a href="https://geo.sac-isc.gc.ca/cippn-fnpim/index-eng.html" target="_blank">
                        https://geo.sac-isc.gc.ca/cippn-fnpim/index-eng.html
                      </a><br>
                      <em>The information contained in the Community Profiles is extracted from the authoritative source systems used for the ongoing operations of the [Crown-Indigenous Relations and Northern Affairs] department.</em>
                    </li>
                    <li>
                      <strong>Indigenous Peoples and Lands - Statistics Maps</strong><br>
                      <a href="https://www.rcaanc-cirnac.gc.ca/eng/1605796533652/1605796625692" target="_blank">
                        https://www.rcaanc-cirnac.gc.ca/eng/1605796533652/1605796625692
                      </a>
                    </li>
                    <li>
                      <strong>Indigenous Peoples, Places & Maps</strong><br>
                      Resource list compiled by Vancouver Island University<br>
                      <a href="https://library.viu.ca/FNmap" target="_blank">https://library.viu.ca/FNmap</a>
                    </li>
                  </ul>
                  </section>
                  <section>
                  <h3>Indigenous Mapping Articles</h3>
                  <ul>
                    <li>
                      <strong>R. Rose-Redwood, N. Blu Barnd, A. H. Lucchesi, S. Dias, and W. Patrick</strong>, "Decolonizing the map: Recentering Indigenous mappings," <em>Cartographica</em>, vol. 55, no. 3, pp. 151–162, 2020, doi: <a href="https://doi.org/10.3138/cart.53.3.intro" target="_blank">10.3138/cart.53.3.intro</a>.
                    </li>
                  </ul>
                </section>
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </BasePage>
  );
}
