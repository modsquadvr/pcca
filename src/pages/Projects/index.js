import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import BasePage from "pages/BasePage"
import { FadeRuleLight } from "components/FadeRule";
import CardModal from './CardModal';
import {useParams} from "react-router-dom";
import ProjectList from "./ProjectList"

import "./projects.css"

function Hero() {
  // eslint-disable-next-line
  const theme = useTheme();
  return (
    <Container className="hero" disableGutters={true} maxWidth="1">
      <Stack className="title bg" sx={{maxWidth:1}} spacing={2} justifyContent="space-evenly">
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color={theme.palette.primary.light}
        >
          Projects
        </Typography>
      </Stack>
      <FadeRuleLight/>
    </Container>
  )
}

export default function Projects() {

  let { slug } = useParams();

  // grab list of projects and add the expanded flag and order for each item
  // order is set by the key attribute so the order of projects displayed can be altered in the ProjectList/index.js json
  let projList = ProjectList.map(obj => {
    let project = { ...obj, expanded: false, order:obj.key };

    // if user followed a link that is /projects/[urlSlug], then that project will open up already expanded
    if (project.urlSlug.toUpperCase() === slug.toUpperCase()) {   
      project.expanded = true;                                   
      project.order = 0;
    }
    return project;
  });

  const [projects, setProjects] = React.useState([...projList]);


  // called by a project when it is clicked to open
  const openProject = (projKey) => {
    let newList = projects.map(proj => {
      if (projKey !== proj.key) {
        proj.expanded = false; // un-expands all other projects
        proj.order = proj.key;  // resets the other cards' order to original
      } 
      else  {
        proj.expanded = true;
        proj.order = 0;  // brings expanded project to top
      }
      return proj
    });
    setProjects(newList);
  };
  
  // called by a project when it is clicked to close
  const closeProject = (projKey) => {
    let newList = projects.map(proj => {
      if (projKey === proj.key)  {
        proj.expanded = false;
        proj.order = proj.key;
      }
      return proj
    });
    setProjects(newList);
  };
  


  return (
    <BasePage className="projects" mode="light" hideHeaderRule={true}>
      <Container disableGutters={true} className="bg" maxWidth="100%">
        <Hero />
        <Container sx={{ py: 8 }} maxWidth="xl">
          <Grid container spacing={4} justifyContent="center">
            {projects.map((proj) =>   {
              return (
                <CardModal key={"proj" + proj.key} openProject={openProject} closeProject={closeProject} project={proj}/>
              )
            })}
          </Grid>
        </Container>
      </Container>

    </BasePage>
  );
}

