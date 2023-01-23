import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API } from '../lib/api';
import { Container, Box, CardActions, Button, Typography } from '@mui/material';
import '../styles/Brands.scss';

export default function Brand() {
  const { id } = useParams();
  const [singleBrand, setSingleBrand] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API.GET(API.ENDPOINTS.getSingleBrand(id))
      .then(({ data }) => setSingleBrand(data))
      .catch(({ message, response }) => console.log(message, response));
  }, [id]);

  const goBackToBrands = () => navigate('/brands');

  return (
    <section className='singleBrand'>
      <Container
        maxWidth='lg'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box>
          <img
            src={singleBrand?.image}
            alt={singleBrand?.name}
            className='image'
          />
        </Box>
        <Box className='text'>
          <Typography variant='h4' component='p' mb={2}>
            {singleBrand?.name}
          </Typography>
          <Typography variant='h6' component='p' mb={2}>
            The following products are on our database and are made by this
            company:
          </Typography>
          {singleBrand?.products.map((product) => (
            <Typography
              variant='body1'
              color='text.secondary'
              component='p'
              mb={2}
            >
              <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: 'none' }}
              >
                {product.name} - {product.dose}
              </Link>
            </Typography>
          ))}
          <CardActions>
            <Button size='small' onClick={goBackToBrands}>
              Back to brands
            </Button>
          </CardActions>
        </Box>
      </Container>
      <Container maxWidth='lg'></Container>
    </section>
  );
}
