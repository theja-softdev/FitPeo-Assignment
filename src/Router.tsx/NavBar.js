import React from 'react';
import './Styles.css';
import Sidebar from '../Router.tsx/SideBar';
import { Box, Grid } from '@mui/material';
import Dashboardcards from "../Router.tsx/Dashboardcards";
import BasicBars from "../Router.tsx/BasicBars";
import Customfiles from "../Router.tsx/Customfiles";
import TableOrder from "../Router.tsx/Tableorders";
import CustomerRating from "../Router.tsx/CustomerRating";

const Navbar = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-content">
          <Sidebar />
          <Box flexGrow={1} p={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Dashboardcards />
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={8}>
                  <BasicBars />
                </Grid>
                <Grid item xs={4}>
                  <Customfiles />
                </Grid>
              </Grid>
             <Grid container item xs={12}>
                <Grid item xs={8}>
                  <TableOrder />
                </Grid>
                <Grid item xs={4}>
                  <CustomerRating />
                </Grid>
              </Grid>
           </Grid>
          </Box>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;