import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import eds from '../../../assets/photos/EDS-500x500.png';
import steam from '../../../assets/photos/mocap-dance-combo-500x500.png'
import bee from "../../../assets/photos/bee-500x500bw.png"



const projects = [
  {
    title:"Earth Data Store & Analytics",
    img:eds
  },
  {
    title:"STEAM, Dance & RT3D Tech",
    img:steam
  },
  {
    title:"Mental Health & Youth",
    img:bee
  }
]

export default function Projects() {
  return ( 
    <Container className="projects" sx={{ py: 8 }} maxWidth="lg">
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
    </Container>
  )
}