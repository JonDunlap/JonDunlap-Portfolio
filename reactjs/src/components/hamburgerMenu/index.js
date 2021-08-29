import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

import * as styles from './hamburgerMenu.module.css';

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
      >
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
