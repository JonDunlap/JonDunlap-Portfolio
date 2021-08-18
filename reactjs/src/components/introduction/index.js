import React from 'react';
import Grid from '@material-ui/core/Grid';

import * as styles from './introduction.module.css';

export default function Header() {
  return (
    <Grid item id='about' component='section'>
      <h1>Hello World!</h1>
      <h2 className={styles.typewriter}>My Name Is: Jonathan Dunlap</h2>
      <h3>Web Developer</h3>
    </Grid>
  );
}
