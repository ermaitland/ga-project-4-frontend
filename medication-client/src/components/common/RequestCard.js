import { Box, Card, CardContent, Typography } from '@mui/material';

export default function RequestCard({ product, text }) {
  return (
    <Card sx={{ display: 'flex', width: 1000 }}>
      <Box sx={{}}>
        <CardContent
          sx={{
            flex: '1 0 auto',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <section
            sx={{
              flex: '1 0 auto',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography component='div' variant='h5'>
              {product}
            </Typography>
            <Typography component='div' variant='h5'>
              {text}
            </Typography>
          </section>
          <Box sx={{}}>
            <div class='mdc-touch-target-wrapper'>
              <div class='mdc-checkbox mdc-checkbox--touch'>
                <input
                  type='checkbox'
                  class='mdc-checkbox__native-control'
                  id='checkbox-1'
                />
                <div class='mdc-checkbox__background'>
                  <svg class='mdc-checkbox__checkmark' viewBox='0 0 24 24'>
                    <path
                      class='mdc-checkbox__checkmark-path'
                      fill='none'
                      d='M1.73,12.91 8.1,19.28 22.79,4.59'
                    />
                  </svg>
                  <div class='mdc-checkbox__mixedmark'></div>
                </div>
                <div class='mdc-checkbox__ripple'></div>
                <div class='mdc-checkbox__focus-ring'></div>
              </div>
            </div>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
