import { useEffect, useState } from 'react';
import {
  TextField,
  Container,
  Box,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Switch,
  Typography
} from '@mui/material';
import { API } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Products.scss';

let emptyForm = {
  name: '',
  dose: '',
  brand: '',
  category: '',
  image: '',
  form: '',
  interactions: '',
  side_effects: '',
  drive: false,
  food: false,
  primary_use: '',
  about: ''
};
export default function CreateProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(emptyForm);
  const [avalibleBrand, setAvalibleBrand] = useState([]);
  const [avalibleCategory, setAvalibleCategory] = useState([]);
  const [checkedOne, setCheckedOne] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(true);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllBrands)
      .then(({ data }) => setAvalibleBrand(data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allCategories)
      .then(({ data }) => setAvalibleCategory(data))
      .catch((e) => console.log(e));
  }, []);

  const [error, setError] = useState(false);

  const handleChangeOne = (e) => {
    setCheckedOne(e.target.checked);
  };
  const handleChangeTwo = (e) => {
    setCheckedTwo(e.target.checked);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      dose: formData.dose,
      brand: formData.brand,
      category: formData.category,
      image: formData.image,
      form: formData.form,
      interactions: formData.interactions,
      side_effects: formData.side_effects,
      drive: checkedOne,
      food: checkedTwo,
      primary_use: formData.primary_use,
      about: formData.about
    };

    API.POST(API.ENDPOINTS.getAllProducts, data, API.getHeaders())
      .then(({ data }) => {
        console.log(data);
        navigate(`/products/${data.id}`);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };

  const navigateToCreateBrand = () => navigate('/brands/create');
  return (
    <section className='createProduct'>
      <Typography
        variant='h4'
        component='p'
        sx={{ textAlign: 'center', pt: 5, pb: 5 }}
      >
        Please add the missing product below, all fields must be filled in!
      </Typography>
      <Container
        maxWidth='lg'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.name}
              onChange={handleFormChange}
              error={error}
              label='Name'
              name='name'
              sx={{ width: 400 }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.dose}
              onChange={handleFormChange}
              error={error}
              label='Dose'
              name='dose'
              sx={{ width: 400 }}
            />
          </Box>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id='brand'>Brand</InputLabel>
            <Select
              size='small'
              labelId='brand'
              value={formData.brand}
              label='Brand'
              name='brand'
              onChange={handleFormChange}
            >
              <MenuItem value=''>None</MenuItem>
              <MenuItem onClick={navigateToCreateBrand}>Not There?</MenuItem>
              {avalibleBrand?.map((brand) => (
                <MenuItem value={brand.id} key={brand.id}>
                  {brand.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id='category'>Category</InputLabel>
            <Select
              size='small'
              labelId='category'
              value={formData.category}
              label='Category'
              name='category'
              onChange={handleFormChange}
            >
              <MenuItem value=''>None</MenuItem>
              {avalibleCategory?.map((category) => (
                <MenuItem value={category.id} key={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>{' '}
          </FormControl>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.image}
              onChange={handleFormChange}
              error={error}
              label='Image'
              name='image'
              sx={{ width: 400 }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.form}
              onChange={handleFormChange}
              error={error}
              label='Please write a description'
              name='form'
              sx={{ width: 400 }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.interactions}
              onChange={handleFormChange}
              error={error}
              label='Interactions'
              name='interactions'
              sx={{ width: 400 }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.side_effects}
              onChange={handleFormChange}
              error={error}
              label='Side Effects'
              name='side_effects'
              sx={{ width: 400 }}
            />
          </Box>
          <Box>
            <Typography>
              Can you drive on this medication?
              <Switch
                checked={checkedOne}
                onChange={handleChangeOne}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </Typography>
          </Box>
          <Box>
            <Typography>
              Do you need to take this medication with food?
              <Switch
                checked={checkedTwo}
                onChange={handleChangeTwo}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={formData.primary_use}
              onChange={handleFormChange}
              error={error}
              label='Primarily use'
              name='primary_use'
              sx={{ width: 400 }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='large'
              type='text'
              value={formData.about}
              onChange={handleFormChange}
              error={error}
              label='Please tell us a bit about this medication'
              name='about'
              sx={{ width: 400 }}
            />
          </Box>
          <Box></Box>
          <Button type='submit'>Submit!</Button>
        </form>
      </Container>
    </section>
  );
}
