import { Box, Card, CardContent, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Container } from '@mui/system';
import { useState } from 'react';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function RequestCard({ product, text }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Card sx={{ display: 'flex', width: 1000 }}>
      <Box>
        <CardContent
          sx={{
            flex: '1 0 auto',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Container
            sx={{
              flex: '1 0 auto',
              display: 'flex',
              flexDirection: 'column',
              width: 800
            }}
          >
            <Typography component='div' variant='h5'>
              {product}
            </Typography>
            <Typography component='div' variant='h5'>
              {text}
            </Typography>
          </Container>{' '}
          <Container>
            <Checkbox
              {...label}
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Container>
        </CardContent>
      </Box>
    </Card>
  );
}
