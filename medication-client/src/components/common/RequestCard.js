import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { Container } from '@mui/system';
import { API } from '../../lib/api';
import '../../styles/Request.scss';

export default function RequestCard({ product, text, id }) {
  const handleDelete = () => {
    API.DELETE(API.ENDPOINTS.deleteRequests(id), API.getHeaders())
      .then(() => {
        console.log('deleted successfully');
        window.location.reload();
      })
      .catch((e) => console.log(e));
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
          <div className='content'>
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
            <Button onClick={handleDelete} variant='contained'>
              {' '}
              Delete{' '}
            </Button>
          </Container>
        </CardContent>
      </Box>
    </Card>
  );
}
