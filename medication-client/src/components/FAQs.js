import { useState, useEffect } from 'react';
import { API } from '../lib/api';
import { Container, Grid, Typography } from '@mui/material';
import FAQsCard from './common/FAQsCard';
import '../styles/FAQs.scss';

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
    <section className='FAQsIndex'>
      <Container maxwith='lg' sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ mt: 6, fontSize: '35px', pl: 3 }}>
          Here are some of the most frequently asked questions!
        </Typography>
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
                      className='FAQsCard'
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
