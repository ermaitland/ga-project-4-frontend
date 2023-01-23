import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import ProductCard from './common/ProductCard';
import { Container, Grid, Box } from '@mui/material';
import '../styles/Products.scss';
import { TextField, Stack, Autocomplete } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProductIndex() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState(filteredProducts);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllProducts)
      .then(({ data }) => setProducts(data))
      .catch(({ message, responce }) => console.log(message, responce));
  }, []);

  useEffect(() => {
    API.GET(API.ENDPOINTS.search(query))
      .then(({ data }) => {
        if (query) {
          setFilteredProducts(data);
        }
      })
      .catch(({ message, response }) => console.log(message, response));
  }, [query]);

  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <section className='ProductIndex'>
      <Box sx={{ flexGrow: 1, display: { sx: 8, sm: 'flex' } }}>
        <Stack spacing={2} sx={{ width: 400 }} className='search'>
          <Autocomplete
            options={query ? filteredProducts : products}
            getOptionLabel={(product) => product.name}
            onChange={(e, newValue) => {
              navigate(`/products/${newValue.id}`);
            }}
            filterOptions={(product) => product}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={(e) => {
                  if (e.target.value !== '') {
                    setQuery(e.target.value);
                  } else {
                    setFilteredProducts([]);
                  }
                }}
                label='Search products here'
              />
            )}
          />
        </Stack>
      </Box>
      <Container maxwith='lg' sx={{ display: 'flex', flexDirection: 'column' }}>
        <Container
          maxwith='lg'
          sx={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8} sm={8} md={12}>
              <Grid container spacing={2}>
                {products?.map((product) => (
                  <Grid item xs={12} sm={12} md={4} key={product.id}>
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      brand={product.brand.name}
                      image={product.image}
                      dose={product.dose}
                      side_effects={product.side_effects}
                      primary_use={product.primary_use}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
}
