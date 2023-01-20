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
    if (checkedOne) {
      return true;
    } else {
      return false;
    }
  };
  const handleChangeTwo = (e) => {
    setCheckedTwo(e.target.checked);
    if (checkedTwo) {
      return true;
    } else {
      return false;
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    API.POST(API.ENDPOINTS.getAllProducts, formData, API.getHeaders())
      .then(({ data }) => navigate('/products'))
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };
  return (
    <>
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
              onChange={handleFormChange}
              error={error}
              label='Name'
              name='name'
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
            />
          </Box>
          <FormControl fullWidth>
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
              {avalibleBrand?.map((brand) => (
                <MenuItem value={brand.id} key={brand._id}>
                  {brand.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
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
                <MenuItem value={category.id} key={category._id}>
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
            />
          </Box>
          <Box></Box>
          <Button type='submit'>Submit!</Button>
        </form>
      </Container>
    </>
  );
}