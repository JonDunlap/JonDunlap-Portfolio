import React from 'react';

import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

import NavLinks from '../navLinks';
import HamburgerMenu from '../hamburgerMenu';

import styles from './header.module.css';

export default function Header() {
  return (
    <Grid
      component='header'
      item
      container
      direction='row'
      justifyContent='flex-end'
      alignItems='center'
      className={styles.header}
      id='top-anchor'
    >
      {/* Nav for small and up screens */}
      <Hidden smDown>
        <Grid
          component='nav'
          container
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
        >
          <NavLinks />
        </Grid>
      </Hidden>

      {/* Nav for small screens */}
      <Hidden smUp>
        <HamburgerMenu>
          <NavLinks />
        </HamburgerMenu>
      </Hidden>
    </Grid>
  );
}
