import { useState, useEffect } from 'react';
import RequestCard from './common/RequestCard';
import { API } from '../lib/api';
import { Container } from '@mui/system';

export default function RequestIndex() {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllRequests)
      .then(({ data }) => {
        console.log(data);
        setRequests(data);
      })
      .catch(({ message, responce }) => console.log(message, responce));
  }, []);

  return (
    <section>
      <Container>
        {requests?.map((request) => (
          <RequestCard product={request?.products?.name} text={request?.text} />
        ))}
      </Container>
    </section>
  );
}
