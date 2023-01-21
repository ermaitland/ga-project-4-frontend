import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API } from '../lib/api';
// import { useAuthenticated } from '../hooks/useAuthenticated';
// import { AUTH } from '../lib/auth';
import { Container, Box, CardActions, Button, Typography } from '@mui/material';

export default function Brand() {
  // const [isLoggedIn] = useAuthenticated();
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
    <>
      <Container
        maxWidth='lg'
        sx={{ display: 'flex' }}
        className='singleProduct'
      >
        <Box>
          <img src={singleBrand?.image} alt={singleBrand?.name} />
        </Box>
        <Box>
          <Typography variant='h4' component='p' mb={2}>
            {singleBrand?.name}
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
                {product.name}
              </Link>
            </Typography>
          ))}
          <CardActions>
            <Button size='small' onClick={goBackToBrands}>
              Back to brands
            </Button>
          </CardActions>
          {/* {AUTH.isSuperuser() && (
            <Link to={`/editProducts/${id}`}>Edit Product</Link>
          )} */}
        </Box>
      </Container>
      <Container maxWidth='lg'></Container>
    </>
  );
}
