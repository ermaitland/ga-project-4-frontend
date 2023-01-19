import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import ProductCard from './common/ProductCard';
import { Container, Grid } from '@mui/material';

export default function ProductIndex() {
  const [products, setProducts] = useState();

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllProducts)
      .then(({ data }) => setProducts(data))
      .catch(({ message, responce }) => console.log(message, responce));
  }, []);

  return (
    <section className='ProductIndex'>
      <Container maxwith='lg' sx={{ display: 'flex', flexDirection: 'column' }}>
        <Container
          maxwith='lg'
          sx={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={2}>
                {products?.map((product) => (
                  <Grid item sm={12} md={4} key={product._id}>
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      brand={product.brand.name}
                      image={product.image}
                      dose={product.dose}
                      category={product.category.name}
                      interactions={product.interactions}
                      side_effects={product.side_effects}
                      drive={product?.drive.toString()}
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
