import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import * as styles from './header.module.css';

export default function Header() {
  return (
    <Grid
      component='header'
      container
      direction='row'
      justifyContent='flex-end'
      alignItems='center'
      className={styles.header}
    >
      <Grid
        component='nav'
        container
        direction='row'
        justifyContent='flex-end'
        alignItems='center'
      >
        <Link href='#about' className={styles.link} underline='none'>
          About
        </Link>
        <Link href='#projects' className={styles.link} underline='none'>
          Projects
        </Link>
        <Link href='#contact' className={styles.link} underline='none'>
          Contact
        </Link>
      </Grid>
    </Grid>
  );
}
