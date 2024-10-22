import * as React from 'react';
// import React, { useState } from 'react';


import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
// import PdfPopup from './PdfPopup.js';

import BasePage from "../BasePage"
import { FadeRuleLight } from "components/FadeRule";

import "./about.css"
import ocean from 'assets/photos/ocean-1920x1280.png';
import VJKFLogo from 'assets/photos/projects/TechTalez/VJKF_Logo.png';
import UVicLogo from 'assets/photos/projects/TechTalez/UVicLogo.png';
import NELogo from 'assets/photos/projects/TechTalez/Northeastern-University-Logo.png';
import PCCA_Logo from 'assets/logos/header_logo.png';

function Hero() {
  // eslint-disable-next-line
  const theme = useTheme();
  return (
    <Container className="hero" disableGutters={true} maxWidth="1">
      <Stack className="title bg" sx={{ maxWidth: 1 }} spacing={2} justifyContent="flex-end">
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="rgb(86, 96, 108)"
          fontWeight="bold"
        >
          <br/>TECH TALEZ TERRITORIES
        </Typography>
      </Stack>
      <FadeRuleLight />
    </Container>
  );
}

export default function Mapping() {
  // const [openPdf, setOpenPdf] = useState(false);

  // const handleOpenPdf = () => setOpenPdf(true);
  // const handleClosePdf = () => setOpenPdf(false);

  return (
    <BasePage className="mapping">
      <Hero />
      <Container sx={{ m: 0, w: 1, maxWidth: 1 }} className="infodump light about">
        <Grid container spacing={4} className="infodump-grid" direction="row">
          <Grid item xs={12} md={10} textAlign="left">
            <Box className="blurb">
              <Typography variant="h4" color="#16597c">
                ABOUT
            </Typography>
            <Typography variant="body1" component="div">
              <p>
              The program started beginning of August, 2024 where scholars all over Canada (primarily Alberta and BC for this particular run) were brought together at UVIC by the Verna J. Kirkness Foundation. From here, we were assigned programs directed by different faculties or professionals. The program this project sprouted from was “Tech Talez”, which had the students enrolled in. 
              </p>
              <p>
                Being introduced to many different resources and potential avenues, given plenty of free reign by such encouraging and supportive mentors, the project we eventually came to develop involved mapping the bands of all our students. From here, we would go about using Google My Maps as our bones to compile all the information we would then transfer into Google Earth as a presentation. Over the course of the week til the very end, we interviewed scholars on their traditional territory and knowledge, proceeding with continued research after the fact to contribute more accurate information with interest, then plot and manually outline the bands while also exploring more technical tools. 
              </p>
             
            </Typography>
          </Box>
        </Grid>
        </Grid>
      </Container>

      <Container sx={{ m: 0, w: 1, maxWidth: 1, backgroundColor: 'rgb(170, 170, 170)' , color: "black"}} className="infodump dark about">
        <Grid container spacing={4} className="infodump-grid" direction="row" justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box className="blurb">
            <Typography 
                  variant="h4" 
                  sx={{ 
                  display:"flex",
                  alignItems:"center",
                  textAlign: 'left', 
                  justifyContent: 'center',
                  height:"100%",
                  padding: '16px 16px',
                  fontWeight: "bold",
                  border: "1px solid black"
                }} 
                color="#16597c"
              >
              WORKSHOP RECORDING<br/>
              <span style={{fontSize: "18px"}}>(coming soon)</span> 
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="blurb">
                <Typography 
                  variant="h4" 
                  sx={{ 
                  display:"flex",
                  alignItems:"center",
                  textAlign: 'center', 
                  justifyContent: 'center',
                  height:"100%",
                  padding: '16px 16px',
                  fontWeight: "bold",
                  border: "1px solid black"
                }} 
                color="#16597c"
              >
              <a href="https://drive.google.com/file/d/1x-s4IWhFHoa2OF69MH6OncK3smdrp5g6/view" target="_blank" rel="noopener noreferrer">WORKSHOP<br/>SLIDES</a>
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="blurb">
              <Typography 
                variant="h4" 
                sx={{ 
                display:"flex",
                alignItems:"center",
                textAlign: 'center', 
                justifyContent: 'center',
                height:"100%",
                padding: '16px 16px',
                fontWeight: "bold",
                border: "1px solid black"

              }} 
              color="#16597c"
            >
            <a href="https://www.google.com/maps/d/u/0/edit?mid=1OVHhNpht3J2-eDA1Y_XI9yfYvqaBn4o&usp=sharing"  target="_blank" rel="noopener noreferrer">WORKSHOP<br/>MyMap</a>
          </Typography>
          </Box>
          </Grid>
          <Grid item xs={12} md={12}></Grid>
          <Box className="blurb">
          <Typography color="#16597c" sx={{ padding:4}}>
          <a href="https://earth.google.com/earth/d/1mUrH2rxeoSVNLTZh-ho3SK92dcEfDBwn?usp=sharing" target="_blank" rel="noopener noreferrer">Tech Tale Google Earth Map</a>
            </Typography>
          </Box>
        
          
        </Grid>
        {/* <PdfPopup open={openPdf} handleClose={handleClosePdf} pdfUrl='assets/TechTalez_test-doc.pdf' /> */}

      </Container> {/* End of Workshop materials Container */}

      <Container sx={{ m: 0, w: 1, maxWidth: 1}} className="infodump light about">
        <Grid container spacing={4} className="infodump-grid" direction="row">
          <Grid item xs={12} sm={12} md={8} textAlign="left">
            <Box className="blurb">
              <Typography variant="h4" color="#16597c">
                INDIGENOUS MAPPING ORGANIZATIONS
              </Typography>
              <Typography variant="body1" component="div">
                <section>
                  <p>
                    <a href="https://www.indigenousmaps.com" target="_blank" rel="noopener noreferrer"><strong>Indigenous Mapping Collective - The Firelight Group</strong></a><br /><em>Providing Indigenous Peoples, Nations, and organizations with the tools and training to map their lands, share their stories, and decolonize place and space.</em>
                    <ul style={{margin: 0, paddingTop: 0}}><li>
                      <a href="https://blog.google/intl/en-ca/products/explore-get-answers/indigenous-lands-in-canada-are-now-in/" target="_blank" rel="noopener noreferrer"><strong>Indigenous Mapping Collective Google Earth Map</strong></a>
                      </li></ul>
                    </p>
                    <p>
                      <a href="https://geographicindigenousfutures.ca/" target="_blank" rel="noopener noreferrer"><strong>Geographic Indigenous Futures Lab</strong></a><br />
                      <em>"At the heart of the GIF Lab’s mission is to bring control of geographic research back into the hands of communities."</em>
                    </p>
                </section>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              component="img"
              sx={{
                maxWidth: "1",
                maxHeight: "600px",
                mr: 0
              }}
              title="Powell River across the strait, taken by Andy Wynden"
              alt=""
              src={ocean}
            />  
          </Grid>
        </Grid>
      </Container> {/* End of INDIGENOUS MAPPING ORGANIZATIONS Container */}
      <Container sx={{ m: 0, w: 1, maxWidth: 1, backgroundColor: 'rgb(170, 170, 170)' , color: "black"}} className="infodump dark about">
        <Grid container spacing={4} className="infodump-grid" direction="row">
          <Grid item xs={12} md={4}>
  
            <Box
              component="img"
              sx={{
                maxWidth: "1",
                maxHeight: "600px",
                mr: 0
              }}
              title="Powell River across the strait, taken by Andy Wynden"
              alt=""
              src={ocean}
            />
          </Grid>
          <Grid item xs={12} md={8} textAlign="left">
            <Box className="blurb">
              <Typography variant="h4" color="#16597c">
                INDIGENOUS MAPS AND RESOURCES
              </Typography>
              <Typography variant="body1" component="div">
                <section>
                  <p>
                      <a href="https://geo.sac-isc.gc.ca/cippn-fnpim/index-eng.html" target="_blank" rel="noopener noreferrer">
                      <strong>First Nation Profiles Interactive Map</strong>
                      </a><br/>
                      Published by the Government of Canada: Crown-Indigenous Relations and Northern Affairs Canada<br /><em>The information contained in the Community Profiles is extracted from the authoritative source systems used for the ongoing operations of the [Crown-Indigenous Relations and Northern Affairs] department.</em>
                  </p>
                  <p>
                    <a href="https://www.rcaanc-cirnac.gc.ca/eng/1605796533652/1605796625692" target="_blank" rel="noopener noreferrer">
                    <strong>Indigenous Peoples and Lands - Statistics Maps</strong></a><br />
                    Published by the Government of Canada: Crown-Indigenous Relations and Northern Affairs Canada
                    </p>
                    <p>
                      <a href="https://library.viu.ca/FNmap" target="_blank" rel="noopener noreferrer"><strong>Indigenous Peoples, Places & Maps</strong></a><br />
                      Resource list compiled by Vancouver Island University
                    </p>
                </section>
                <section>
                  <h3>Indigenous Mapping Articles</h3>
                    <p>
                      <strong>R. Rose-Redwood, N. Blu Barnd, A. H. Lucchesi, S. Dias, and W. Patrick</strong>, "Decolonizing the map: Recentering Indigenous mappings," <em>Cartographica</em>, vol. 55, no. 3, pp. 151–162, 2020, doi: 10.3138/cart.53.3.intro. <a href="https://sci-hub.se/10.3138/cart.53.3.intro" target="_blank" rel="noopener noreferrer">https://sci-hub.se/10.3138/cart.53.3.intro</a>.
                    </p>
                </section>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container> {/* End of INDIGENOUS MAPS AND RESOURCES Container */}

      <Container sx={{ m: 0, w: 1, maxWidth: 1}} className="infodump light about">
        <Grid container spacing={4} className="infodump-grid" direction="row">
          <Grid item xs={12} sm={12} md={8} textAlign="left">
            <Box className="blurb">
              <Typography variant="h4" color="#16597c">
                MAP BUILDING
              </Typography>
              <Typography variant="body1" component="div">
              <section>
                  <h3>Mapping Software</h3>
                  <p>
                    ESRI
                  </p>
                  <p>
                    QGIS
                  </p>
                </section>
                <section>
                  <h3>Mapping Platforms</h3>
                  <p>
                    Google My Maps
                    </p>
                    <p>
                      Google Earth
                    </p>
                    <p>
                      OSM
                    </p>
                </section>
                <section>
                  <h3>Web Mapping Tools</h3>
                  <p>
                    Leaflet
                  </p>
                  <p>
                    Mapbox
                  </p>
                </section>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              component="img"
              sx={{
                maxWidth: "1",
                maxHeight: "600px",
                mr: 0
              }}
              title="Powell River across the strait, taken by Andy Wynden"
              alt=""
              src={ocean}
            />  
          </Grid>
        </Grid>
      </Container> {/* End of INDIGENOUS MAPPING ORGANIZATIONS Container */}


      <Container sx={{ m: 0, w: 1, maxWidth: 1, backgroundColor: 'rgb(170, 170, 170)' , color: "black"}} className="infodump dark about">
        <Typography variant="h4" sx={{ textAlign: 'center', padding: '16px 0' }} color="#16597c">
          PARTNERS
        </Typography>
        <Grid container spacing={4} className="infodump-grid" direction="row" justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              sx={{
                maxWidth: "1",
                maxHeight: "800px",
                mr: 0
              }}
              title=""
              alt="Verna J. Kirkness Foundation Logo"
              src={VJKFLogo}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              sx={{
                maxWidth: "0.6",
                maxHeight: "600px",
                mr: 0
              }}
              title=""
              alt="Northeastern University Logo"
              src={NELogo}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              sx={{
                maxWidth: "0.6",
                maxHeight: "600px",
                mr: 0
              }}
              title=""
              alt="University of Victoria Logo"
              src={UVicLogo}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              sx={{
                maxWidth: "1",
                maxHeight: "800px",
                mr: 0
              }}
              title=""
              alt="Pacific Coastal Computing Association Logo"
              src={PCCA_Logo}
            />
          </Grid>
        </Grid>
      </Container> {/* End of PARTNERS Container */}
    </BasePage>
  );
}
