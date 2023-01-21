import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import ProductCard from './common/ProductCard';
import { Container, Grid, Box } from '@mui/material';
import Search from './common/Search';
import '../styles/Products.scss';

export default function ProductIndex() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllProducts)
      .then(({ data }) => setProducts(data))
      .catch(({ message, responce }) => console.log(message, responce));
  }, []);

  // useEffect(() => {
  //   setProducts(searchProducts);
  // }, [searchProducts]);

  return (
    <section className='ProductIndex'>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
        <Search />
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
                  <Grid item sm={12} md={4} key={product.id}>
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      brand={product.brand.name}
                      image={product.image}
                      dose={product.dose}
                      // category={product.category.name}
                      // interactions={product.interactions}
                      side_effects={product.side_effects}
                      // drive={product?.drive.toString()}
                      food={product?.food.toString()}
                      primary_use={product.primary_use}
                      about={product.about}
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
