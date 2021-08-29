import React from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import NavLinks from '../navLinks';
import HamburgerMenu from '../hamburgerMenu';

import * as styles from './header.module.css';

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
      <Hidden xsDown>
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
