import { Button, Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../lib/api';

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
        flexDirection: 'row-reverse'
      }}
    >
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Container>
          <Button onClick={AddABrand}>Add a Brand</Button>
        </Container>
        <Container>
          <Button onClick={AddAProduct}>Add a Product</Button>
        </Container>
      </Container>
      <Container>
        <Typography>
          If the product you wish to add does one of the following brands,
          please add the brand first.
        </Typography>
        {brands?.map((brand) => (
          <Typography>{brand.name}</Typography>
        ))}
      </Container>
    </Box>
  );
}
