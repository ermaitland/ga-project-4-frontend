import { useState, useEffect } from 'react';
import RequestCard from './common/RequestCard';
import { API } from '../lib/api';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import '../styles/Request.scss';

export default function RequestIndex() {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    API.POST(API.ENDPOINTS.allRequests, {}, API.getHeaders())
      .then(({ data }) => {
        console.log(data);
        setRequests(data);
      })
      .catch(({ message, responce }) => console.log(message, responce));
  }, []);

  return (
    <section className='RequestIndex'>
      <Container
        maxwith='lg'
        sx={{
          pt: 10
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {requests?.map((request) => (
                <Grid item sm={12} key={request.id}>
                  <RequestCard
                    key={request.id}
                    product={request?.products?.name}
                    text={request?.text}
                    className='requestCard'
                  />{' '}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
