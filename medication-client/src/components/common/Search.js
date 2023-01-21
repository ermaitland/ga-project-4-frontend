import { TextField, Stack, Autocomplete } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../lib/api';
import '../../styles/Products.scss';

export default function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllProducts)
      .then(({ data }) => setProducts(data))
      .catch(({ message, response }) => console.log(message, response));
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

  return (
    <Stack spacing={2} sx={{ width: 600, color: '#003459' }} className='search'>
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
  );
}
