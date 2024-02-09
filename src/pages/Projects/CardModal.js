
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <ButtonBase focusRipple {...other} />;
})(({ theme, expand }) => ({
  // transform: !expand ? 'scale(1, 1)' : 'scale(2, 1)',
  //  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const expandedCard = (proj) => {
  // if the component does exist
  if (typeof proj.component !== "undefined") {
    return (React.createElement(proj.component)    )
  } 
  // if the component does not yet exist
  return React.createElement(
    () => <Typography paragraph>The component {proj.component} has not been created yet.</Typography>,
    { key: proj.key }
  );
}

const miniCard = (proj) => {
  return (
    <>
      <CardMedia
      component="img"
      height="194"
      image={proj.img}
      alt={proj.alt}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {proj.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {proj.blurb}
        </Typography>
      </CardContent>
    </>
  )
}


export default function CardModal({project, ...props}) {
  const handleExpandClick = () => {
    if (project.expanded) { // if already expanded, hide
      props.closeProject(project.key);
    } else { // if not expanded, show
      props.openProject(project.key);
    }
    
  };      

  let GridItem = (project) => {
    if (project.expanded) {
      return (
        <Grid item order={project.order} xs={12} sm={12} md={12}> 
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
            <ExpandMore
              expand={project.expanded}
              onClick={handleExpandClick}
              aria-expanded={project.expanded}
              aria-label="show more"
            >
              <Collapse in={project.expanded}>
                <CardContent>
                  {expandedCard(project)}
              </CardContent>
              </Collapse>
            </ExpandMore>
        </Card>
      </Grid>
      )
    }
    return (
      <Grid item order={project.order} xs={12} sm={6} md={4}> 
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
          <ExpandMore
              expand={project.expanded}
              onClick={handleExpandClick}
              aria-expanded={project.expanded}
              aria-label="show more"
            >
          {miniCard(project)}
          </ExpandMore>

        </Card>
      </Grid>
    )
  }


  return GridItem(project);
}