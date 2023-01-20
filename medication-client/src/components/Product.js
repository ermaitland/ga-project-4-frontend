import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API } from '../lib/api';
import { useAuthenticated } from '../hooks/useAuthenticated';
import { AUTH } from '../lib/auth';
import {
  Container,
  Box,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@mui/material';

export default function Product() {
  const [isLoggedIn] = useAuthenticated();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API.GET(API.ENDPOINTS.getSingleProduct(id))
      .then(({ data }) => setSingleProduct(data))
      .catch(({ message, response }) => console.log(message, response));
  }, [id]);

  const goBackToMedications = () => navigate('/products');

  let driveData = '';
  if (singleProduct?.drive === true) {
    driveData = 'Yes';
  } else {
    driveData = 'No';
  }

  let foodData = '';
  if (singleProduct?.food === true) {
    foodData = 'Yes';
  } else {
    foodData = 'No';
  }

  return (
    <>
      <Container
        maxWidth='lg'
        sx={{ display: 'flex' }}
        className='singleProduct'
      >
        <Box>
          <img src={singleProduct?.image} alt={singleProduct?.name} />
        </Box>
        <Box>
          <CardContent>
            <Typography variant='h4' component='p' mb={2}>
              {singleProduct?.name}
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              component='p'
              mb={2}
            >
              {singleProduct?.primary_use}
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              component='p'
              mb={2}
            >
              Legal category: {singleProduct?.category.name}
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              component='p'
              mb={2}
            >
              {singleProduct?.dose}
            </Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color='text.primary'
              component='p'
              mb={2}
            >
              Do I take this with food? {foodData}
            </Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color='text.primary'
              component='p'
              mb={2}
            >
              Can I drive on this? {driveData}
            </Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color='text.primary'
              component='p'
              mb={2}
            >
              Interactions: {singleProduct?.interactions}
            </Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color='text.primary'
              component='p'
              mb={2}
            >
              Common side effects: {singleProduct?.side_effects}
            </Typography>
            <Typography
              sx={{ fontSize: 18 }}
              color='text.primary'
              component='p'
            >
              Manufactured by {singleProduct?.brand.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={goBackToMedications}>
              More Medications
            </Button>
          </CardActions>
        </Box>
      </Container>
      <Container maxWidth='lg'>
        <Box>
          <Typography>{singleProduct?.about}</Typography>
        </Box>
      </Container>
    </>
  );
}
