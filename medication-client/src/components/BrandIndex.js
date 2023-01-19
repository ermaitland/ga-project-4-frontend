import { Container } from '@mui/system';
import { useState, useEffect } from 'react';
import { API } from '../lib/api';
import BrandCard from './common/BrandCard';

export default function BrandIndex() {
  const [brands, setBrands] = useState();

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllBrands)
      .then(({ data }) => setBrands(data))
      .catch(({ message, response }) => console.log(message, response));
  }, []);

  return (
    <Container>
      {brands?.map((brand) => (
        <BrandCard key={brand.id} name={brand.name} image={brand.image} />
      ))}
    </Container>
  );
}
