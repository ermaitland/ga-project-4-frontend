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
  primary_use,
  about
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} subheader={brand} />
      <CardMedia component='img' height='194' image={image} alt={name} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Category: {category}
          Dose: {dose}
          Interactions: {interactions}
          Side Effects: {side_effects}I can drive on this: {drive}I need to take
          this with food: {food}
          Used for: {primary_use}
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
          <Typography paragraph>About {name}</Typography>
          <Typography paragraph>{about}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
