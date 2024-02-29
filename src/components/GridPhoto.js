import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import './faderule.css';


export default function GridPhoto(props) {
  let sizing = {xs:"12"}
  if (parseInt(props.size) === 6) sizing = {xs:"12", md:"6"}
  else if (parseInt(props.size) === 4) sizing = {xs:"12", md:"4"}
  console.log(props.size)
  return (
    <Grid item {...sizing} maxHeight="400px">
      <Container  component="img" maxWidth={false} sx={{maxHeight:"100%", maxWidth:"100%", width:"auto", height:"auto"}} src={props.photo}/>
    </Grid>
  );
}

