import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faSeedling, faPeopleLine } from '@fortawesome/free-solid-svg-icons'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { FadeRuleDark } from "components/FadeRule";

const services = [
  {
     title:"Consulting and Advisory",
    icon:faBrain,
    text: "We provide consulting and advisory services with specializations in applied research and digital transformation, particularly in the areas of healthcare, environment and the arts/digital media. Our framework for digital adoption/transformation consulting/advisory builds on the individual experiences of our team, with the aim of cross-leveraging for new interdisciplinary projects.",
  },
  {
      title:"Capacity Building",
      icon:faSeedling,
      text: "We conceptualize, design, team-build, launch and or manage STEM/STEAM capacity building programs with partners in industry, community, non-profit, academia and government. Our goal is to narrow the digital divide between tech-related opportunities and marginalized groups through innovative, diverse and inclusive programs in education, training and upskilling. ",
  },
  {
    title:"C4G Projects",
    icon:faPeopleLine,
    text: "Interdisciplinary <i>Computing for Good</i> project development round out our services. We take on leadership and delivery roles from ideation & strategy, partnership development to final delivery & evaluation, including funding (government, foundations, industry). Making it happen.",
}
];


export default function Services() {
  return ( 
    <Container className="services light" sx={{ py: 8 }} maxWidth="1">
      <Typography gutterBottom variant="h2" align="center">Services</Typography>
      <FadeRuleDark/>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item key={"service" + index} xs={12} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', background:'#ededea'}}
            >
              <CardContent sx={{ display: 'flex', flexDirection: "column", justifyContent:"space-betweeen", flexGrow: 1 }}>
                <div className="card-header">
                  <Typography gutterBottom variant="h3" align="center" className="icon" color="secondary">
                      <FontAwesomeIcon icon={service.icon} />
                  </Typography>
                  <Typography gutterBottom variant="h5" align="center" component="h2">
                    {service.title}
                  </Typography>
                </div>
                <div className="card-content">
                  <Typography  dangerouslySetInnerHTML={{__html: service.text}}/>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
