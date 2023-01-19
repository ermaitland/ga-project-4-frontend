import {
  useTheme,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

export default function BrandCard({ image, name }) {
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
