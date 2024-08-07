import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Sidebar = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    width: '230px',
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <div className="sidebar" >
      <div className="logo-container" xs={12}>
        <img src="/images/StartingLogo.png" alt="Starting Logo" className="logo" />
        <div className="search-wrapper">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </div>
        <EmailOutlinedIcon className='email-icon' />
        <SettingsOutlinedIcon className='setting-icon' />
        <NotificationsNoneOutlinedIcon className='Notification-icon' />
        <img src="/images/image.png" alt='image' className="image" />
      </div>
      <div className="sidebar-icon active">
        <HomeIcon />
      </div>
      <div className="sidebar-icon-bar">
        <BarChartIcon />
      </div>
      <div className="sidebar-icon">
        <PresentToAllIcon />
      </div>
      <div className="sidebar-icon">
        <SlideshowOutlinedIcon />
      </div>
      <div className="sidebar-icon">
        <LocalMallOutlinedIcon />
      </div>
      <div className="sidebar-icon4">
        <PowerSettingsNewOutlinedIcon />
      </div>
    </div>
  );
};

export default Sidebar;