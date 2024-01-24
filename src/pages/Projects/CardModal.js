
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

const expandedCard = (props) => {
  return (
    <CardContent>
      <Typography paragraph dangerouslySetInnerHTML={{__html: props.fullText}}/>
    </CardContent>
  )
}



const gridItemExpanded = {xs:12, sm: 12, md: 12, order:{xs:0}}
const gridItemShrunk = {xs:12, sm:6, md: 4}
//     <Grid item {...expanded ? {...gridItemExpanded} : {...gridItemShrunk}} >


export default function CardModal(project) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let miniCard =       
    <>
      <CardMedia
      component="img"
      height="194"
      image={project.img}
      alt={project.alt}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2" align="center">
        {project.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {project.blurb}
      </Typography>
    </CardContent>
    </>;



  return (
    <Grid item {...expanded ? {order: 0} : ""}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
      >
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
          {!expanded && miniCard}
          <Collapse in={expanded}>
          <CardContent>
          {expanded && 
            <Typography paragraph dangerouslySetInnerHTML={{__html: project.fullText}}/>
          }

            </CardContent>
            {/* {expanded && expandedCard } */}
          </Collapse>
        </ExpandMore>
      </Card>
    </Grid>

  );
}