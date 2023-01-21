import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../styles/Brands.scss';

export default function BrandCard({ image, name, id }) {
  const navigate = useNavigate();
  const navigateToBrand = () => navigate(`/brands/${id}`);
  return (
    <Card
      sx={{ display: 'flex', width: 1000 }}
      onClick={navigateToBrand}
      className='brandCard'
    >
      <Box
        sx={
          {
            // display: 'flex',
            // flexDirection: 'row'
          }
        }
        className='cardContent'
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {name}
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          sx={{ width: 100, height: 100 }}
          image={image}
          alt={name}
        />
      </Box>
    </Card>
  );
}
