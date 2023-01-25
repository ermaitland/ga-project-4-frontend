import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import MedListCard from './common/MedListCard';
import { Button, Container, Grid, Typography } from '@mui/material';
import '../styles/myMeds.scss';
import { useParams, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';
import { useAuthenticated } from '../hooks/useAuthenticated';

export default function MyMedsIndex() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [myMeds, setMyMeds] = useState([]);
  const [isLoggedIn] = useAuthenticated();

  if (!isLoggedIn) {
    navigate('/products');
  }

  useEffect(() => {
    API.GET(API.ENDPOINTS.medsList(userId))
      .then(({ data }) => {
        setMyMeds(data.my_meds);
      })
      .catch(({ message, response }) => console.log(message, response));
  }, [userId]);

  const navigateToAdd = () => navigate('/addToMyMeds');
  const navigateToLetter = () => navigate(`/letter/${userId}`);

  return (
    <section className='MyMedsIndex'>
      <Typography
        sx={{
          mt: 0,
          mb: 3,
          fontSize: 25,
          textAlign: 'center',
          color: '#003459'
        }}
      >
        The medications on your current list are:
      </Typography>
      <Button onClick={navigateToAdd} sx={{ pb: 2, color: '#007ea7' }}>
        <AddIcon />
        <Typography sx={{ pl: 2 }}>
          Add Medications to your watch list
        </Typography>
      </Button>
      <Button onClick={navigateToLetter} sx={{ pb: 5, color: '#00a7e1' }}>
        <EmailIcon />
        <Typography sx={{ pl: 2 }}>Need a letter?</Typography>
      </Button>

      {!myMeds.length ? (
        <Typography>
          You have no medications in your list yet! Get adding to keep track of
          them
        </Typography>
      ) : (
        <Container
          maxwith='lg'
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Container
            maxwith='lg'
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8} sm={8} md={12}>
                <Grid container spacing={2}>
                  {myMeds[0]?.products?.map((medication) => (
                    <Grid item xs={12} sm={12} md={4} key={medication?.id}>
                      <MedListCard
                        key={medication?.id}
                        id={medication?.id}
                        name={medication?.name}
                        brand={medication?.brand?.name}
                        image={medication?.image}
                        dose={medication?.dose}
                        side_effects={medication?.side_effects}
                        primary_use={medication?.primary_use}
                        medication_id={myMeds[0]?.id}
                      />
                    </Grid>
                  ))}

                  {myMeds[1]?.products?.map((medication) => (
                    <Grid item xs={12} sm={12} md={4} key={medication?.id}>
                      <MedListCard
                        key={medication?.id}
                        id={medication?.id}
                        name={medication?.name}
                        brand={medication?.brand?.name}
                        image={medication?.image}
                        dose={medication?.dose}
                        side_effects={medication?.side_effects}
                        primary_use={medication?.primary_use}
                        medication_id={myMeds[1]?.id}
                      />
                    </Grid>
                  ))}

                  {myMeds[2]?.products?.map((medication) => (
                    <Grid item xs={12} sm={12} md={4} key={medication?.id}>
                      <MedListCard
                        key={medication?.id}
                        id={medication?.id}
                        name={medication?.name}
                        brand={medication?.brand?.name}
                        image={medication?.image}
                        dose={medication?.dose}
                        side_effects={medication?.side_effects}
                        primary_use={medication?.primary_use}
                        medication_id={myMeds[2]?.id}
                      />
                    </Grid>
                  ))}

                  {myMeds[3]?.products?.map((medication) => (
                    <Grid item xs={12} sm={12} md={4} key={medication?.id}>
                      <MedListCard
                        key={medication?.id}
                        id={medication?.id}
                        name={medication?.name}
                        brand={medication?.brand?.name}
                        image={medication?.image}
                        dose={medication?.dose}
                        side_effects={medication?.side_effects}
                        primary_use={medication?.primary_use}
                        medication_id={myMeds[3]?.id}
                      />
                    </Grid>
                  ))}

                  {myMeds[4]?.products?.map((medication) => (
                    <Grid item xs={12} sm={12} md={4} key={medication?.id}>
                      <MedListCard
                        key={medication?.id}
                        id={medication?.id}
                        name={medication?.name}
                        brand={medication?.brand?.name}
                        image={medication?.image}
                        dose={medication?.dose}
                        side_effects={medication?.side_effects}
                        primary_use={medication?.primary_use}
                        medication_id={myMeds[4]?.id}
                      />
                    </Grid>
                  ))}
                  {myMeds[5]?.products?.map((medication) => (
                    <Grid item xs={12} sm={12} md={4} key={medication?.id}>
                      <MedListCard
                        key={medication?.id}
                        id={medication?.id}
                        name={medication?.name}
                        brand={medication?.brand?.name}
                        image={medication?.image}
                        dose={medication?.dose}
                        side_effects={medication?.side_effects}
                        primary_use={medication?.primary_use}
                        medication_id={myMeds[5]?.id}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      )}
    </section>
  );
}
