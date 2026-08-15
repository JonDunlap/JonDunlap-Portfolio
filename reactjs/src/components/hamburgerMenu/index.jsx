import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/esm/Menu';

import styles from './hamburgerMenu.module.css';

export default function HamburgerMenu({ children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  // methods for opening hamburger menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <IconButton
        aria-label='open navigation'
        aria-controls='menu-navigation'
        aria-haspopup='true'
        onClick={handleMenu}
        size="large">
        <MenuIcon
          className={styles.hamburger}
          aria-label='open drawer'
          fontSize='medium'
        />
      </IconButton>
      <Menu
        id='menu-navigation'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </nav>
  );
}
