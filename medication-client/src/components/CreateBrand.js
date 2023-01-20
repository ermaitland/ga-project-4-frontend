import { useState } from 'react';
import { TextField, Container, Box, Button, Typography } from '@mui/material';
import { API } from '../lib/api';
import { useNavigate } from 'react-router-dom';

export default function CreateBrand() {
  const [formData, setFormData] = useState({ name: '', image: '' });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.POST(API.ENDPOINTS.getAllBrands, formData, API.getHeaders())
      .then(({ data }) => {
        console.log(data);
        navigate('/brands');
      })
      .catch((e) => {
        if (e.status === 301) {
          setError(true);
        }
        console.log(e);
      });
  };

  return (
    <section className='createProduct'>
      <Typography
        variant='h4'
        component='p'
        sx={{ textAlign: 'center', pt: '40px' }}
      >
        Add a Brand
      </Typography>
      <Container
        maxWidth='lg'
        sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.name}
              onChange={handleChange}
              error={error}
              label='Name'
              name='name'
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.image}
              onChange={handleChange}
              error={error}
              label='Image'
              name='image'
            />
          </Box>
          <Button type='submit'>Add the brand!</Button>
        </form>
      </Container>
    </section>
  );
}
