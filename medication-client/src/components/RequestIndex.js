import { useState, useEffect } from 'react';
import RequestCard from './common/RequestCard';
import { API } from '../lib/api';
import { Container } from '@mui/system';

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
    <section>
      <Container>
        {requests?.map((request) => (
          <RequestCard
            key={request.id}
            product={request?.products?.name}
            text={request?.text}
          />
        ))}
      </Container>
    </section>
  );
}
