import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// eslint-disable-next-line
import ProjectList from "pages/Projects/ProjectList"
import eds from 'assets/photos/EDS-500x500.png';
import steam from 'assets/photos/projects/MocapDance/mocap-dance-combo-500x500.png'
import bee from "assets/photos/bee-500x500bw.png"


const projects = [
  {
    title:"Earth Analytics and the Environment",
    img:eds
  },
  {
    title:"Dance, Film and the Arts",
    img:steam
  },
  {
    title:"Work-Integrated Learning",
    img:bee
  }
]

const Porjects = (projectList) => {
  console.log("porjection")
  let config = {}
  return (
    <Carousel
      infiniteLoop
      centerMode
      centerSlidePercentage={50}
      {...config}
    >
      {projects.map((project, index) => (
          <div>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                image={project.img}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  {project.title}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions> */}
            </Card>
          </div>
        ))}
    </Carousel>
  )
}

export default function Projects() {
  let buttonConfig = {
    fullWidth: true,
    size:"large", 
    variant:"outlined",
    color:"light" ,
    href:"/projects",
    className:"all-projects"
  }
  return ( 
    <Container className="projects" sx={{ py: 8 }} maxWidth="lg">
      <Porjects/>
      <Button {...buttonConfig}>Explore the projects!</Button>


    </Container>
  )
}
// eslint-disable-next-line
const oldProjects = () => {
  return (
    <Grid container spacing={4}>
    {projects.map((project, index) => (
      <Grid item key={"proj" + index} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="img"
            image={project.img}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {project.title}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Edit</Button>
          </CardActions> */}
        </Card>
      </Grid>
    ))}
    </Grid>
  )
}
