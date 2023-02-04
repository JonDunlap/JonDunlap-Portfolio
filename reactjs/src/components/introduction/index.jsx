import React from 'react';
import Grid from '@material-ui/core/Grid';

import * as styles from './introduction.module.css';

export default function Header() {
  return (
    <Grid
      item
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='flex-start'
      spacing={1}
      component='section'
    >
      <Grid item component='h1'>
        Hello World!
      </Grid>

      <Grid item container>
        <Grid item component='h2'>
          My Name Is:
        </Grid>

        <Grid item component='h2'>
          Jonathan Dunlap<span className={styles.caret}>|</span>
        </Grid>
      </Grid>

      <Grid item component='h3' className={styles.h3_alternate}>
        Full Stack Developer
      </Grid>
    </Grid>
  );
}
