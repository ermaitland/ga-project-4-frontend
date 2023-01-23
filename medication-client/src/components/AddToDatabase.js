import { Button, Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../lib/api';
import '../styles/Products.scss';

export default function AddToDataBase() {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllBrands)
      .then(({ data }) => setBrands(data))
      .catch((e) => console.log(e));
  });

  const AddAProduct = () => navigate('/products/create');
  const AddABrand = () => navigate('/brands/create');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
      className='addToDatabase'
    >
      {' '}
      <Typography sx={{ fontSize: 20, textAlign: 'center', mt: 10 }}>
        How would you like to contribute?
      </Typography>
      <Container className='buttons'>
        <Container sx={{ mt: 10, mb: 10, sx: 8 }}>
          <Button onClick={AddABrand} variant='contained' size='large'>
            Add a Brand
          </Button>
        </Container>
        <Container sx={{ mt: 10, mb: 10 }}>
          <Button onClick={AddAProduct} variant='contained' size='large'>
            Add a Product
          </Button>
        </Container>
      </Container>
      <Container sx={{ mb: 25 }}>
        <Typography sx={{ textAlign: 'center' }}>
          If the product you wish to add does one of the following brands,
          please add the brand first.
        </Typography>
        {brands?.map((brand) => (
          <Typography sx={{ textAlign: 'center' }}>{brand.name}</Typography>
        ))}
      </Container>
    </Box>
  );
}
