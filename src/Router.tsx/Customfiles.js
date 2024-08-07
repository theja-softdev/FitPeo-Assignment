import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const items = [
  { icon: <ControlPointOutlinedIcon />, text: 'Goals', color: '#FF6F61' },
  { icon: <LunchDiningOutlinedIcon />, text: 'Popular Dishes', color: '#5C6BC0' },
  { icon: <MenuBookIcon />, text: 'Menus', color: '#26A69A' },
];

const Customfiles = () => {
  return (
    <List className='list'>
      {items.map((item, index) => (
        <ListItem key={index} style={{ backgroundColor: '#000000', margin: '8px 0', borderRadius: '8px',border:"1px solid black" }}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: item.color }}>
              {item.icon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.text} style={{ color: '#FFFFFF' }} />
          <IconButton edge="end" aria-label="navigate">
            <KeyboardArrowRightIcon style={{ color: '#FFFFFF' }} />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Customfiles;
