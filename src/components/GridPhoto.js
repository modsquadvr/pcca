import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function GridPhoto(props) {
  let sizing = {xs:12}
  if ( props.size === 4 ) sizing = {xs:12, md: 4}
  else if ( props.size === 6) sizing = {xs:12, md: 6}

  return (
    <Grid item {...sizing}>
      <Box className="card-image" component="img" src={props.photo} />
    </Grid>
  );
}

