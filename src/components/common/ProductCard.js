import {
  styled,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  CardActionArea,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../lib/auth';
import { API } from '../../lib/api';
import { useAuthenticated } from '../../hooks/useAuthenticated';
import '../../styles/Products.scss';

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
  side_effects,
  primary_use,
  id
}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const navigateToProduct = () => navigate(`/products/${id}`);
  const [formData, setFormData] = useState({});
  const [checked, setChecked] = useState(false);
  const [isLoggedIn] = useAuthenticated();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setChecked(true);
  };

  const data = {
    products: [id],
    owner: AUTH.getPayload().sub
  };

  const handleFavorites = (e) => {
    e.preventDefault();
    API.PUT(API.ENDPOINTS.addToMeds, data, API.getHeaders())
      .then(({ data }) => {
        console.log(data);
        alert(`You have added ${name} to your medical tracker`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className='productCard'>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={name} subheader={brand} />
        <CardActionArea onClick={navigateToProduct}>
          <CardMedia component='img' height='194' image={image} alt={name} />
        </CardActionArea>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            Find out more
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {isLoggedIn && (
            <form onSubmit={handleFavorites}>
              <Button
                onClick={handleChange}
                type='submit'
                sx={{ color: '#007ea7' }}
              >
                {checked ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon valule={id} className='FaveIcon' />
                )}
              </Button>
            </form>
          )}
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
            <Typography display='block'>Dose: {dose}</Typography>
            <Typography display='block'>
              Side Effects: {side_effects}
            </Typography>
            <Typography display='block'>Used for: {primary_use}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </section>
  );
}
