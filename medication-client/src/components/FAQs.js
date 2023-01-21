import { useState, useEffect } from 'react';
import { API } from '../lib/api';
import { Container, Grid } from '@mui/material';
import FAQsCard from './common/FAQsCard';

export default function FAQs() {
  const [FAQs, setFAQs] = useState([]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.faqs)
      .then(({ data }) => {
        console.log(data);
        setFAQs(data);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(FAQs);

  return (
    <section className='ProductIndex'>
      <Container maxwith='lg' sx={{ display: 'flex', flexDirection: 'column' }}>
        <Container
          maxwith='lg'
          sx={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {FAQs?.map((FAQ) => (
                  <Grid item sm={12} key={FAQ.id}>
                    <FAQsCard
                      key={FAQ.id}
                      question={FAQ.question}
                      answer={FAQ.answer}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
}
