import { useState } from 'react';
import { API } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../lib/auth';
import { Container, TextField, Box, Button } from '@mui/material';

export default function Register() {
  const [formFields, setFormFields] = useState({
    first_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    username: '',
    requests: ''
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.POST(API.ENDPOINTS.register, { ...formFields, requests: [] });

      const loginData = await API.POST(API.ENDPOINTS.login, {
        username: formFields.username,
        password: formFields.password
      });

      AUTH.setToken(loginData.data.token);
      navigate('/products');
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };
  const navigateToLogin = (e) => navigate('/login');

  return (
    <section className='LoginRegister'>
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 500
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              size='small'
              name='first_name'
              id='first_name'
              type='text'
              label='First Name'
              required={true}
              value={formFields.first_name}
              onChange={handleChange}
              error={error}
              sx={{ mb: 2 }}
            />
          </div>
          <div>
            <TextField
              size='small'
              name='username'
              id='username'
              type='text'
              label='Username'
              required={true}
              value={formFields.username}
              onChange={handleChange}
              error={error}
              sx={{ mb: 2 }}
            />
          </div>
          <div>
            <TextField
              size='small'
              name='email'
              id='email'
              type='email'
              label='Email'
              required={true}
              value={formFields.email}
              onChange={handleChange}
              error={error}
              sx={{ mb: 2 }}
            />
          </div>
          <div>
            <TextField
              size='small'
              name='password'
              id='password'
              type='password'
              label='Password'
              required={true}
              value={formFields.password}
              onChange={handleChange}
              error={error}
              sx={{ mb: 2 }}
            />
          </div>
          <div>
            <TextField
              size='small'
              name='password_confirmation'
              id='password_confirmation'
              type='password'
              label='Password Confirmation'
              required={true}
              value={formFields.password_confirmation}
              onChange={handleChange}
              error={error}
              sx={{ mb: 2 }}
            />
          </div>
          <Box mt={2}>
            <Button variant='contained' type='submit'>
              Register!
            </Button>
            <Button onClick={navigateToLogin}>
              Already Registered? Login here
            </Button>
          </Box>
        </form>
      </Container>
    </section>
  );
}
