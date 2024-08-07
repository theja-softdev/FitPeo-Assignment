import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Order from '../Router.tsx/Order.png';
import Delivery from '../Router.tsx/Delivery.png';
import Cancel from '../Router.tsx/cancelled.png';
import revenue from '../Router.tsx/revenue.png';
import Progress from '../Router.tsx/Progress';

const Dashboardcards = () => {
  const cards = [
    { title: 'Total Orders', value: 75, icon: Order, change: '3%', positive: true },
    { title: 'Total Deliver', value: 70, icon: Delivery, change: '-3%', positive: false },
    { title: 'Total Cancel', value: 5, icon: Cancel, change: '3%', positive: true },
    { title: 'Revenue', value: '$12k', icon: revenue, change: '-3%', positive: false },
  ];

  const progressValue = 70;

  return (
    <>
      <div>
        <h1 className='headsection'>Dashboard</h1>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                className="card"
                  elevation={3}
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: 2,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box p={2} textAlign="center">
                    <img src={card.icon} alt={card.title} style={{ width: 40, height: 25 }} />
                    <Typography variant="h6" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.value}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            className='profit'
            sx={{
              padding: 2,
              backgroundColor: 'black',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              Net Profit
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Typography variant="h5" sx={{ marginBottom: '20px', color: 'white' }}>
                $6759.25
              </Typography>
              <Box>
                <Progress value={progressValue} />
              </Box>
            </Box>
            <Typography variant="caption" sx={{ color: 'white' }}>
              *The values here have been rounded off.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboardcards;