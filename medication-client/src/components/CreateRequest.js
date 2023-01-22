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
  MenuItem,
  Typography
} from '@mui/material';
import '../styles/Request.scss';

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
    API.POST(API.ENDPOINTS.createRequest, data)
      .then(({ data }) => {
        navigate('/products');
      })
      .catch((e) => console.log(e));
  };

  return (
    <section className='createRequest'>
      <Box sx={{ color: 'white', mb: 2, pt: 7 }}>
        <Typography sx={{ fontSize: 20 }}>
          See something which doesnt look right? Please let us know.
        </Typography>
        <Typography sx={{ fontSize: 20 }}>
          Simply fill in the form and we'll do the rest! Thank you
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ mb: 2 }}>
            <FormControl sx={{ width: 400 }}>
              <InputLabel id='products' sx={{ color: 'white' }}>
                Product
              </InputLabel>
              <Select
                size='small'
                labelId='products'
                value={formData.products}
                label='Products'
                name='products'
                onChange={handleChange}
                required={true}
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
            style={{
              width: 600,
              backgroundColor: '#e8e9f3',
              color: '#00171f',
              mb: 35
            }}
          />
        </Box>
        <Button
          type='Submit'
          sx={{ color: 'white', mb: 35, fontWeight: 'bold' }}
        >
          Send your review!
        </Button>
      </form>
    </section>
  );
}
