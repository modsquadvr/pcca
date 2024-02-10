import * as React from 'react';
import BasePage from "../BasePage"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardModal from './CardModal';

import ProjectList from "./ProjectList"

import "./projects.css"


export default function Projects() {
  // grab list of projects and add the expanded flag and order for each item
  // order is set by the key attribute so the order of projects displayed can be altered in the ProjectList/index.js json
  let projList = ProjectList.map(obj => ({ ...obj, expanded: false, order:obj.key }))
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
    <BasePage>
      <Container className="projects" sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
          {projects.map((proj) =>   {
            return (
              <CardModal key={"proj" + proj.key} openProject={openProject} closeProject={closeProject} project={proj}/>
            )
          })}
        </Grid>
      </Container>
    </BasePage>
  );
}

