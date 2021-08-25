import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

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
      <Grid
        component='nav'
        container
        direction='row'
        justifyContent='flex-end'
        alignItems='center'
      >
        <Link
          href='#about'
          className={styles.link}
          color='inherit'
          underline='none'
        >
          About
        </Link>

        <Link
          href='#contact'
          className={styles.link}
          color='inherit'
          underline='none'
        >
          Contact
        </Link>

        <Link
          href='https://standardresume.co/r/jondunlap'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.link}
          color='inherit'
          underline='none'
        >
          Résumé
        </Link>
      </Grid>
    </Grid>
  );
}
