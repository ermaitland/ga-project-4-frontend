import { Container } from '@mui/system';
import { useState, useEffect } from 'react';
import { API } from '../lib/api';
import { Card, Typography, CardContent, Box } from '@mui/material';

export default function CategoryIndex() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    API.GET(API.ENDPOINTS.allCategories)
      .then(({ data }) => {
        console.log(data);
        setCategories(data);
      })
      .catch(({ message, response }) => console.log(message, response));
  }, []);

  const descriptions = [
    {
      no: 1,
      info: "People can buy products classified as 'pharmacy medicines' ( P ) but only from a pharmacy and in the presence of a pharmacist. These medicines, also called 'pharmacy-only medicines', are not usually displayed on open shelves. A rectangular box enclosing the letter P appears on the packaging of pharmacy medicines."
    },
    {
      no: 2,
      info: "The medicines—also called 'general sales list ( GSL ) medicines'—are also available for self-selection in pharmacies. General sale medicines are taken for common, easily recognised ailments which usually last around 2 to 3 days. These medicines cause few troublesome side effects in normal use."
    },
    {
      no: 3,
      info: 'The medicines in a rectangular box enclosing the letters POM appears on the packs of prescription-only medicines. In general, prescription-only medicines are used for conditions that are best diagnosed and managed by health professionals.'
    }
  ];

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {categories?.map((category) => (
          <Card sx={{ display: 'flex', width: 400 }} key={category.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component='div' variant='h5'>
                  {category.name}
                </Typography>{' '}
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
      {descriptions?.map((description) => (
        <Card>
          <Box>
            <Typography component='div' variant='h5' key={description.no}>
              {description.info}
            </Typography>
          </Box>
        </Card>
      ))}
    </Container>
  );
}
