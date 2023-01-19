import {
  styled,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export default function ProductCard({
  name,
  brand,
  image,
  dose,
  category,
  interactions,
  side_effects,
  drive,
  food,
  primary_use
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log({ drive }, { food });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} subheader={brand} />
      <CardMedia component='img' height='194' image={image} alt={name} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Find out more
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='Read more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Basic info on: {name}</Typography>
          <Typography> Category: {category}</Typography>
          <Typography display='block'>Dose: {dose}</Typography>
          <Typography display='block'>Interactions: {interactions}</Typography>
          <Typography display='block'>Side Effects: {side_effects}</Typography>
          <Typography display='block'>I can drive on this: {drive}</Typography>
          <Typography display='block'>
            I need to take this with food: {food}
          </Typography>
          <Typography display='block'>Used for: {primary_use}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
