import '../styles/Home.scss';
import Typewriter from 'typewriter-effect';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Typography, Button } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import MedicationIcon from '@mui/icons-material/Medication';

export default function Home() {
  const navigate = useNavigate();

  const navigateToMedicattion = () => navigate('/products');

  return (
    <section className='Home'>
      <Box sx={{ pt: 50, color: '#003459', pb: 40 }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('How well ')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(1500)
              .typeString('do you know your medications? ')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .pauseFor(1000)
              .typeString('MediCheck.')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .start();
          }}
        />
      </Box>
      <Typography sx={{ pb: 0, mb: 0 }}>Find out more</Typography>
      <ExpandCircleDownIcon />
      <VerticalTimeline lineColor='#003459' animate='true'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#00a7e1', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: '#00a7e1', color: '#fff' }}
        >
          <p>
            In 2017, 11.5 million adults in the UK were prescribed medications.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#007ea7', color: '#fff' }}
          iconStyle={{ background: '#007ea7', color: '#fff' }}
        >
          <p>
            It is estimated £300 million of NHS prescribed medications are
            wasted every year.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#003459', color: '#fff' }}
          iconStyle={{ background: '#003459', color: '#fff' }}
        >
          <p>16.3 million people misuse prescription drugs per year.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#007ea7', color: '#fff' }}
          iconStyle={{ background: '#007ea7', color: '#fff' }}
        >
          <p>
            If you repeatedly take the same medication for limited periods of
            time, it increases the likihood of a drug allergy.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: '#00a7e1', color: '#fff' }}
          iconStyle={{ background: '#00a7e1', color: '#fff' }}
        >
          <p>
            The most common side effects for prescription drugs are: Dizziness,
            Skin rash and Headache.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: '#007ea7', color: '#fff' }}
          iconStyle={{ background: '#007ea7', color: '#fff' }}
        >
          <p>
            74.2% of prescription users reported that they have adequate
            information about medicines provided on their medicine labels.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: '#003459', color: '#fff' }}
          iconStyle={{ background: '#003459', color: '#003459' }}
        >
          <p>
            So, will you help us spread information about your prescriptions?
          </p>
        </VerticalTimelineElement>
        <Button onClick={navigateToMedicattion}>
          <VerticalTimelineElement
            iconStyle={{ background: '#003459', color: '#fff' }}
            icon={<MedicationIcon />}
          />
        </Button>
      </VerticalTimeline>
    </section>
  );
}
