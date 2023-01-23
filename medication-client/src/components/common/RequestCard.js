import { Box, Card, CardContent, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Container } from '@mui/system';
import { useState } from 'react';
import '../../styles/Request.scss';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function RequestCard({ product, text }) {
  const [checked, setChecked] = useState(false);

  const handleDoneChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Card sx={{ display: 'flex' }}>
      <Box>
        <CardContent
          sx={{
            flex: '1 0 auto',
            display: 'flex',
            flexDirection: 'row'
          }}
          className='requestContainer'
        >
          <div>
            <Container
              sx={{
                flex: '1 0 auto',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography component='div' variant='h5'>
                {product}
              </Typography>
              <Typography component='div' variant='h5'>
                {text}
              </Typography>
            </Container>{' '}
          </div>
          <Container>
            <form>
              <Checkbox
                {...label}
                checked={checked}
                onChange={handleDoneChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </form>
          </Container>
        </CardContent>
      </Box>
    </Card>
  );
}
