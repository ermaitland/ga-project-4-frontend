import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BrandCard({ image, name, id }) {
  const navigate = useNavigate();
  const navigateToBrand = () => navigate(`/brands/${id}`);
  return (
    <Card sx={{ display: 'flex', width: 400 }} onClick={navigateToBrand}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {name}
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          sx={{ width: 151 }}
          image={image}
          alt={name}
        />
      </Box>
    </Card>
  );
}
