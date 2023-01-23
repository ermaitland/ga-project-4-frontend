import '../styles/Home.scss';
import Typewriter from 'typewriter-effect';
import { Box } from '@mui/system';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
  return (
    <section className='Home'>
      <Box sx={{ pt: 50, color: '#003459', pb: 50 }}>
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
              .typeString('Check them.')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .start();
          }}
        />
      </Box>
      <VerticalTimeline lineColor='#003459' animate='true'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <p>
            In 2017, 11.5 million adults in the UK were prescribed medications.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <p>
            It is estimated £300 million of NHS prescribed medications are
            wasted every year.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <p>16.3 million people misuse prescription drugs per year.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <p>
            If you repeatedly take the same medication for limited periods of
            time, it increases the likihood of a drug allergy.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <p>
            The most common side effects for prescription drugs are: Dizziness,
            Skin rash and Headache.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <p>
            74.2% of prescription users reported that they have adequate
            information about medicines provided on their medicine labels.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          iconStyle={{ background: '#007ea7', color: '#003459' }}
          // icon={<SchoolIcon />}
        >
          <p>
            So, will you help us spread information about your prescriptions?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </section>
  );
}
