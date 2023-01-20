import React from 'react';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import * as styles from './contact.module.css';

export default function Header() {
  return (
    <Grid
      item
      container
      direction='column'
      spacing={2}
      id='contact'
      component='footer'
    >
      <Grid item component='h2'>
        Contact
      </Grid>
      <Grid
        item
        xs
        container
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <Grid item>
          <Link
            href='mailto:jon@jondunlap.com'
            className={styles.link}
            color='inherit'
            underline='none'
          >
            Email
          </Link>
        </Grid>

        <Grid item>
          <Link
            href='https://github.com/JonDunlap'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
            color='inherit'
            underline='none'
          >
            GitHub
          </Link>
        </Grid>

        <Grid item>
          <Link
            href='https://www.linkedin.com/in/jonathandunlap82/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
            color='inherit'
            underline='none'
          >
            LinkedIn
          </Link>
        </Grid>
        <Grid item>
          <Link
            href='https://docs.google.com/document/d/1VczsT0TiA-zF3bBvUxbXlEXONIxN6ngGd9DhuddU2u4/edit?usp=sharing'
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
    </Grid>
  );
}
