import '../styles/Home.scss';
import Typewriter from 'typewriter-effect';
import { Box } from '@mui/system';

export default function Home() {
  return (
    <section className='Home'>
      <Box sx={{ pt: 50, color: 'white' }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('How well ')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .typeString('do you know your drugs? ')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </Box>
    </section>
  );
}
