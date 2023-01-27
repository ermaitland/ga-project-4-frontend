import { useState } from 'react';
import {
  Container,
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { API } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AUTH } from '../lib/auth';
import '../styles/myMeds.scss';

export default function AddMedicationsToWatchlist() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllProducts)
      .then(({ data }) => setProducts(data))
      .catch((e) => console.log(e));
  }, []);

  const data = {
    products: [formData.products],
    owner: AUTH.getPayload().sub
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.PUT(API.ENDPOINTS.addToMeds, data, API.getHeaders())
      .then(({ data }) => {
        console.log(data);
        navigate(`/${AUTH.getPayload().sub}`);
      })
      .catch((e) => {
        if (e.status === 301) {
          setError(true);
        }
        console.log(error);
      });
  };

  return (
    <section className='addToList'>
      <Typography variant='h4' sx={{ textAlign: 'center', pb: 15, pt: 10 }}>
        Add current medications to your list!
      </Typography>
      <Container
        maxWidth='lg'
        sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id='product1'>Medication to add</InputLabel>
              <Select
                size='small'
                labelId='product'
                value={formData.products}
                label='Product'
                name='products'
                onChange={handleChange}
              >
                <MenuItem value=''>None</MenuItem>
                {products?.map((product) => (
                  <MenuItem value={product.id} key={product.id}>
                    {product.name} - {product.dose}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button type='submit'>Add to my watchlist!</Button>
        </form>
      </Container>
    </section>
  );
}
