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

export default function About() {
  return (
    <BasePage className="about">
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
                    The Pacific Coastal Computing Association (PCCA) incorporated in 2020 as a non-profit based in Victoria, B.C., Canada. PCCA works with partners to promote innovation, diversity & inclusivity in capacity building and positive change in education, the arts, environment, health & wellness and technology. 
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
                    Our HEART Focus
              </Typography>
              <Typography variant="body-1">
                  <p>
                    H. Healthcare: health & wellbeing, esp. mental health.  
                  </p>
                  <p>
                    E. Environment: sustainability and conservation. 
                  </p>
                  <p>
                    A. The Arts: performing arts, interactive media and A&E. 
                  </p>
                  <p>
                    R. Reconciliation: fostering harmony, diversity & inclusivity. 
                  </p>
                  <p>
                    T. Technology: innovation, applied research, computing 4 good.
                  </p>
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
              alt="A calm seascape with smooth mottled grey rocks in the foreground. Across the water there are mountains in the far distance. The photograph is taken in the early evening, and there are wisps of clouds all across the sky in various shades of blue and grey, complementing the blues and grays of the rocks and the ocean. "
              src={ocean}
            />


          </Grid>

        </Grid>
      </Container>
      
      <Container sx={{m:0, w:1, maxWidth:1}} className="infodump light about">
        <Grid container spacing={4} className="infodump-grid" direction="row">
          <Grid item xs={12}>
            <section id="pcca-privacy-policy" aria-labelledby="pcca-privacy-policy-title">
              <header>
                <Typography variant="h4" id="pcca-privacy-policy-title" sx={{ mb: 2, color: '#282c34' }}>
                  Privacy, Information & Data Protection Policy
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2, color: '#282c34' }}>
                  Organization: Pacific Coastal Computing Association (PCCA)
                </Typography>
                <Box 
                  className="policy-statement" 
                  sx={{ 
                    padding: '.75rem 1rem',
                    borderLeft: '4px solid #0b62b3',
                    background: 'rgba(11, 98, 179, 0.08)',
                    mb: 3,
                    borderRadius: '4px'
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#282c34' }}>
                    <strong>Policy Statement:</strong> PCCA maintains an established and published policy to protect
                    small and medium-sized enterprises' (SMEs') privacy, information, and data. This page constitutes that policy.
                  </Typography>
                </Box>
              </header>

              <section aria-labelledby="scope-title">
                <Typography variant="h5" id="scope-title" sx={{ mb: 2 }}>
                  1) Scope & Purpose
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  This policy explains how PCCA collects, uses, discloses, safeguards, and retains information when working with SMEs,
                  their representatives, and partners. It applies to personal information and business information we handle in
                  connection with program delivery, research collaborations, membership, events, support, and contracting.
                </Typography>
              </section>

              <section aria-labelledby="laws-title">
                <Typography variant="h5" id="laws-title" sx={{ mb: 2 }}>
                  2) Our Legal Framework
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  PCCA complies with the <em>British Columbia Personal Information Protection Act (PIPA)</em> and, where applicable,
                  Canada's <em>Personal Information Protection and Electronic Documents Act (PIPEDA)</em>.
                  Where both apply, requirements are substantially similar; PCCA adopts practices that satisfy each.
                </Typography>
              </section>

              <section aria-labelledby="principles-title">
                <Typography variant="h5" id="principles-title" sx={{ mb: 2 }}>
                  3) Our Privacy & Data Protection Principles
                </Typography>
                <Box component="ul" sx={{ mb: 3 }}>
                  <li><strong>Meaningful Consent:</strong> We obtain informed consent for the collection, use, and disclosure of personal information for stated purposes.</li>
                  <li><strong>Purpose Limitation & Minimization:</strong> We collect only what a reasonable person would consider appropriate and use it solely for legitimate, identified purposes.</li>
                  <li><strong>Security Safeguards:</strong> We use administrative, technical, and physical safeguards to protect against unauthorized access, disclosure, or misuse.</li>
                  <li><strong>Access & Correction:</strong> Individuals can request access to, or correction of, their personal information held by PCCA.</li>
                  <li><strong>Accountability:</strong> We maintain policies, procedures, and governance to ensure compliance, including oversight of service providers handling information on our behalf.</li>
                  <li><strong>Cross-Border Transfers:</strong> When information is processed outside Canada, we require comparable protection and implement appropriate contractual and organizational measures.</li>
                </Box>
              </section>

              <section aria-labelledby="collection-title">
                <Typography variant="h5" id="collection-title" sx={{ mb: 2 }}>
                  4) Information We Handle
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Depending on the engagement, we may handle: business contact details, organizational roles, communications,
                  project materials, workshop or event records, billing or contracting details, and usage logs of PCCA-managed services.
                  We do not collect more than necessary to deliver our programs and services.
                </Typography>
              </section>

              <section aria-labelledby="use-title">
                <Typography variant="h5" id="use-title" sx={{ mb: 2 }}>
                  5) How We Use Information
                </Typography>
                <Box component="ul" sx={{ mb: 3 }}>
                  <li>To deliver programs, services, research, training, and support requested by SMEs.</li>
                  <li>To administer membership, events, outreach, and stakeholder communications.</li>
                  <li>To meet legal, audit, and reporting obligations.</li>
                  <li>To improve our services through de-identified or aggregated analysis where appropriate.</li>
                </Box>
              </section>

              <section aria-labelledby="retention-title">
                <Typography variant="h5" id="retention-title" sx={{ mb: 2 }}>
                  6) Retention & Secure Disposal
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  We retain information only as long as necessary for the purposes identified and applicable requirements.
                  When no longer needed, we securely destroy or de-identify records according to our retention schedules.
                </Typography>
              </section>

              <section aria-labelledby="security-title">
                <Typography variant="h5" id="security-title" sx={{ mb: 2 }}>
                  7) Security Measures
                </Typography>
                <Box component="ul" sx={{ mb: 3 }}>
                  <li>Role-based access controls, least-privilege permissions, and multi-factor authentication for administrative access.</li>
                  <li>Encryption in transit and at rest (where feasible) and protected network environments.</li>
                  <li>Vendor due diligence and contractual clauses addressing confidentiality, security, and incident handling.</li>
                  <li>Staff training, acceptable-use rules, and periodic policy reviews.</li>
                </Box>
              </section>

              <section aria-labelledby="service-providers-title">
                <Typography variant="h5" id="service-providers-title" sx={{ mb: 2 }}>
                  8) Service Providers & Cross-Border Processing
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  PCCA may engage trusted service providers (e.g., hosting, communications, analytics) which may operate
                  inside or outside Canada. We require them to protect information to standards comparable to those that
                  apply to PCCA and limit use to the purposes we specify. Upon request, we will identify relevant
                  service providers and processing locations, subject to security considerations.
                </Typography>
              </section>

              <section aria-labelledby="rights-title">
                <Typography variant="h5" id="rights-title" sx={{ mb: 2 }}>
                  9) Access, Correction & Choices
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Individuals may request access to their personal information or ask us to correct inaccuracies.
                  We may need to verify identity and, where permitted by law, may refuse requests (with reasons).
                  To exercise these rights or to withdraw consent (where applicable), contact our Privacy Officer.
                </Typography>
              </section>

              <section aria-labelledby="incidents-title">
                <Typography variant="h5" id="incidents-title" sx={{ mb: 2 }}>
                  10) Incidents & Breach Response
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  We maintain processes to identify, assess, and respond to privacy or security incidents.
                  Where required by law and, where appropriate, we notify affected individuals and regulators,
                  and take steps to mitigate risk and prevent recurrence.
                </Typography>
              </section>

              <section aria-labelledby="governance-title">
                <Typography variant="h5" id="governance-title" sx={{ mb: 2 }}>
                  11) Governance & Accountability
                </Typography>
                <Box component="ul" sx={{ mb: 3 }}>
                  <li><strong>Privacy Officer:</strong> Accountable for our privacy management program, training, and oversight.</li>
                  <li><strong>Policies & Reviews:</strong> We review and update policies and safeguards to reflect current legal and operational needs.</li>
                  <li><strong>Documentation:</strong> We maintain records supporting compliance (e.g., agreements, assessments, retention logs).</li>
                </Box>
              </section>

              <section aria-labelledby="contact-title">
                <Typography variant="h5" id="contact-title" sx={{ mb: 2 }}>
                  12) Contact PCCA's Privacy Officer
                </Typography>
                <Box component="address" sx={{ mb: 3 }}>
                  <Typography variant="body1">
                    Email: <a href="mailto:privacy@coastalcomputing.ca">privacy@coastalcomputing.ca</a>
                  </Typography>
                </Box>
              </section>

              <section aria-labelledby="updates-title">
                <Typography variant="h5" id="updates-title" sx={{ mb: 2 }}>
                  13) Updates to This Policy
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  We may update this policy to reflect legal, technical, or operational changes. Material changes will be posted here
                  with an updated effective date.
                </Typography>
              </section>

              <footer>
                <Typography 
                  variant="body2" 
                  className="legal" 
                  sx={{ 
                    fontSize: '.95rem',
                    color: '#555',
                    fontStyle: 'italic'
                  }}
                >
                  This policy is intended to summarize PCCA's privacy and data protection practices under applicable law.
                  In any conflict between this policy and applicable legislation, the legislation governs.
                </Typography>
              </footer>
            </section>
          </Grid>
        </Grid>
      </Container>
    </BasePage>
  );
}
