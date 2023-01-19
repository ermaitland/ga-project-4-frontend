import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../lib/api';
import {
  TextareaAutosize,
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

export default function CreateRequest() {
  const [formData, setFormData] = useState({ products: '', text: '', user: 3 });
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleProductChange = (e) => ;

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllProducts)
      .then(({ data }) => setProducts(data))
      .catch(({ message, responce }) => console.log(message, responce));
  }, []);

  const data = { products: formData.products, text: formData.text, user: 3 };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.POST(API.ENDPOINTS.allRequests, data)
      .then(({ data }) => {
        navigate('/products');
      })
      .catch((e) => console.log(e));
  };

  return (
    <section className='LoginRegister'>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: 4,
              mb: 2
            }}
          >
            <Box>
              <FormControl fullWidth>
                <InputLabel id='products'>Product</InputLabel>
                <Select
                  size='small'
                  labelId='products'
                  value={formData.products}
                  label='Products'
                  name='products'
                  onChange={handleChange}
                >
                  <MenuItem value=''>None</MenuItem>
                  {products.map((product) => (
                    <MenuItem value={product.id} key={product.id}>
                      {product.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <TextareaAutosize
              name='text'
              value={formData.text}
              placeholder='Leave a Review'
              label='Review'
              type='textarea'
              onChange={handleChange}
              minRows={10}
              style={{ width: 500 }}
            />
          </Box>
          <Button type='Submit'>Send your review!</Button>
        </form>
      </Container>
    </section>
  );
}
