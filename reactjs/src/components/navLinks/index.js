import React from 'react';
import Link from '@material-ui/core/Link';

import * as styles from './navLinks.module.css';

export default function NavLinks() {
  return (
    <>
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
    </>
  );
}
