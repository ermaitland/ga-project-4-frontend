import { Box, Card, CardContent, Typography } from '@mui/material';

export default function RequestCard({ product, text }) {
  return (
    <Card sx={{ display: 'flex', width: 400 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {product}
          </Typography>
          <Typography component='div' variant='h5'>
            {text}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
