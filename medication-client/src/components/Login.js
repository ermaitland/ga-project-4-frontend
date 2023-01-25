import { useState } from 'react';
import { API } from '../lib/api';
import { AUTH } from '../lib/auth';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import '../styles/LoginAndRegister.scss';
import { useAuthenticated } from '../hooks/useAuthenticated';

export default function Login() {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [error, setError] = useState({ username: false, password: false });
  const navigate = useNavigate();
  const [isLoggedIn] = useAuthenticated();

  if (isLoggedIn) {
    navigate('/');
  }

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.POST(API.ENDPOINTS.login, formFields)
      .then(({ data }) => {
        AUTH.setToken(data.token);
        navigate('/');
      })
      .catch((e) => {
        console.log(e);
        setError({ username: true, password: true });
      });
  };

  const navigateToRegister = () => navigate('/register');

  return (
    <section className='LoginAndRegister'>
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
              size='medium'
              name='username'
              id='username'
              type='text'
              label='Username'
              placeholder='Enter your username'
              required={true}
              value={formFields.username}
              onChange={handleChange}
              error={error.username}
              sx={{ mb: 2, width: 350 }}
            />
          </div>
          <div>
            <TextField
              size='medium'
              name='password'
              id='password'
              type='password'
              label='Password'
              placeholder='Password'
              required={true}
              value={formFields.password}
              onChange={handleChange}
              variant='outlined'
              error={error.password}
              sx={{ mb: 2, width: 350 }}
            />
          </div>
          <Button
            variant='contained'
            type='submit'
            size='medium'
            endIcon={<SendIcon />}
            sx={{ mr: 1 }}
          >
            Login
          </Button>
          <Button onClick={navigateToRegister} size='small' className='button'>
            Not Registered? Register here
          </Button>
        </form>
      </Container>
    </section>
  );
}
