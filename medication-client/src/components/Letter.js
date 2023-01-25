import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import { Typography, Box } from '@mui/material';
import '../styles/myMeds.scss';
import { useParams } from 'react-router-dom';
import '../styles/myMeds.scss';

export default function Letter() {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const [myMeds, setMyMeds] = useState([]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.medsList(userId))
      .then(({ data }) => {
        setUserInfo(data);
        setMyMeds(data.my_meds);
      })
      .catch(({ message, response }) => console.log(message, response));
  }, [userId]);

  return (
    <section className='Letter'>
      <Box sx={{ border: '3px #00a7e1 solid', mt: 10, p: 5 }}>
        {!myMeds.length ? (
          <Typography>
            You need to add some medications to your tracker to generate a
            medication letter...
          </Typography>
        ) : (
          <Typography sx={{ mb: 3, fontSize: 20, align: 'center', width: 750 }}>
            To Whom it may concern,
            <p>
              We can confirm{' '}
              {userInfo.first_name ? userInfo.first_name : '________'} is a user
              of MediChecker, a medical information company. Their GP can
              confirm that{' '}
              {userInfo.first_name ? userInfo.first_name : '________'} is
              currently taking:{' '}
            </p>
            {myMeds[0]?.products.map((product) => (
              <Typography key={product.id}>
                {product.name} at {product.dose}. Effect ability to drive:{' '}
                {product.drive.toString()}
              </Typography>
            ))}
            {myMeds[1]?.products.map((product) => (
              <Typography key={product.id}>
                {product.name} at {product.dose}. Effect ability to drive:{' '}
                {product.drive.toString()}
              </Typography>
            ))}
            {myMeds[2]?.products.map((product) => (
              <Typography key={product.id}>
                {product.name} at {product.dose}. Effect ability to drive:{' '}
                {product.drive.toString()}
              </Typography>
            ))}
            {myMeds[3]?.products.map((product) => (
              <Typography key={product.id}>
                {product.name} at {product.dose}. Effect ability to drive:{' '}
                {product.drive.toString()}
              </Typography>
            ))}
            {myMeds[4]?.products.map((product) => (
              <Typography key={product.id}>
                {product.name} at {product.dose}. Effect ability to drive:{' '}
                {product.drive.toString()}
              </Typography>
            ))}{' '}
            <p>Signed: _____________ </p>
            <p>
              If there are any adverse side effects you should immediately
              contact a Doctor, call 111 or go to the hospital.
            </p>
            <p>
              {userInfo.first_name ? userInfo.first_name : 'They'} may be
              carrying these medications with them for their health.
            </p>
            <p>Regards,</p> Team MediChecker
          </Typography>
        )}
      </Box>
    </section>
  );
}
