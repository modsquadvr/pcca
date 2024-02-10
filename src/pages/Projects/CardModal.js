
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



// displays either the mini card or the full expanded project component
const projectCard = (project) => {

  // ========= EXPANDED CARD
  if (project.expanded) {
    let expandedCard;
    // if the project component to be rendered upon expansion does exist
    if (typeof project.component !== "undefined") {
      expandedCard = (React.createElement(project.component))
    } else { // if [project].component does not exist
      expandedCard = React.createElement(
        () => <Typography paragraph>The component {project.component} has not been created yet. Create a component in the ProjectList folder, then import it into the ProjectList/index.js file, and specify its name in the component attribute of your project's entry in the ProjectList json</Typography>,
        { key: project.key }
      );
    }

    return (
      <Collapse in={project.expanded}>
        <CardContent>
          {expandedCard}
        </CardContent>
      </Collapse>
  
    )
  }


// ========= MINI CARD
  return (
    <>
      <CardMedia
      component="img"
      sx={{width:"200px", height:"200px"}}
      image={project.img}
      alt={project.alt}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h4" align="center">
          {project.title}
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
    // resizes the grid items based on whether a project is expanded
    let gridSizing = project.expanded ? {xs:12, sm:12, md:12, lg:12} : {xs:12, sm:12, md:6, lg: 6};
    return (
      <Grid item order={project.order} {...gridSizing}> 
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
          <ExpandMore
            expand={project.expanded}
            onClick={handleExpandClick}
            aria-expanded={project.expanded}
            aria-label="show more"
          >
            {projectCard(project)}
          </ExpandMore>
      </Card>
    </Grid>
    )

  }


  return GridItem(project);
}