import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import ProductCard from './common/ProductCard';

export default function ProductIndex() {
  const [products, setProducts] = useState();

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllProducts)
      .then(({ data }) => setProducts(data))
      .catch(({ message, responce }) => console.log(message, responce));
  }, []);

  return (
    <section>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          brand={product.brand.name}
          image={product.image}
          dose={product.dose}
          category={product.category.name}
          interactions={product.interactions}
          side_effects={product.side_effects}
          drive={product.drive}
          food={product.food}
          primary_use={product.primary_use}
          about={product.about}
        />
      ))}
    </section>
  );
}
