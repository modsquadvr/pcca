
import * as React from 'react';
// eslint-disable-next-line
import { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CloseIcon from '@mui/icons-material/Close';

// eslint-disable-next-line
import { FadeRuleLight, FadeRuleDark } from "components/FadeRule";

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




function ExpandedCard(project,handleExpandClick) {
  const CloseButton = (props) => {
    let classNames = "close-btn " + props.className;
    return (
      <ExpandMore
      className={classNames}
      expand={project.expanded}
      onClick={handleExpandClick}
      aria-expanded={project.expanded}
      aria-label={"Hide details on " + project.title}
      >{props.text}</ExpandMore>
    )
  }

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
      <CardContent className="card-expanded">
        <Box>
          <CloseButton className="close-icon" text={<CloseIcon/>}/>
          <Typography component='h4' variant='h4'>
            {project.fullTitle}
          </Typography>
          <FadeRuleDark marginBottom="2em"/>
        </Box>
        {expandedCard}
        <CloseButton className="close-text MuiTypography-h5" text={<Typography variant="button">Close</Typography>}/>
      </CardContent>
    </Collapse>

  )

}
// displays either the mini card or the full expanded project component
const ProjectCard = (project, handleExpandClick) => {
  // const projRef = useRef(null);
  if (project.expanded) return ExpandedCard(project,handleExpandClick)
// ========= MINI CARD
  return (
    <ExpandMore
    className="expand-btn"
    expand={project.expanded}
    onClick={handleExpandClick}
    aria-expanded={project.expanded}
    aria-label={"show more about " + project.title}
    >
      <CardMedia
      component="img"
      image={project.img}
      alt={project.alt}
      sx={{width:'50%'}}
      />
      <CardContent sx={{ flexGrow: 1, width:'50%' }}>
        <Typography gutterBottom variant="h5" component="h4" align="center">
          {project.title}
        </Typography>
      </CardContent>
    </ExpandMore>

  )

}



export default function CardModal({project, ...props}) {

    const projRef = React.useRef(null);

    const handleExpandClick = () => {
    if (project.expanded) { // if already expanded, hide
      props.closeProject(project.key);
    } else { // if not expanded, show
      props.openProject(project.key);
    }
    
  };      

  React.useEffect(() => {
    if (project.expanded && projRef.current) {
      console.log("expanded!")
      projRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [project]); // run if there's an alert
  

  let GridItem = (project) => {
    // resizes the grid items based on whether a project is expanded
    let gridSizing = project.expanded ? {xs:12, sm:12, md:12, lg:12} : {xs:12, sm:12, md:6, xl:4};
    return (
      <Grid item order={project.order} {...gridSizing} textAlign="center" ref={projRef}> 
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
          {ProjectCard(project, handleExpandClick)}
        </Card>
      </Grid>
    )

  }


  return GridItem(project);
}