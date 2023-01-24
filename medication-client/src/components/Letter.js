import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import { Button, Container, Grid, Typography } from '@mui/material';
import '../styles/myMeds.scss';
import { useParams, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import '../styles/myMeds.scss';

export default function Letter() {
  const navigate = useNavigate();
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
      <Typography
        sx={{ mt: 0, mb: 3, fontSize: 20, align: 'center', width: 750 }}
      >
        <p>To Whom it may concern,</p>
        <p>
          {userInfo.first_name} is a user of MediCheck, a medical information
          company. We can confirm that {userInfo.first_name} is current taking:{' '}
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
        <p>
          If there are any adverse side effects you should immediately contact a
          Doctor, call 111 or go to the hospital.
        </p>
        <p>
          {userInfo.first_name} may be carrying these medications with them for
          their health.
        </p>
        <p>Regards, Team MediCheck</p>
      </Typography>
    </section>
  );
}
