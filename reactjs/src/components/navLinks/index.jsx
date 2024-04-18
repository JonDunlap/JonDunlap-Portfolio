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
        href='#projects'
        className={styles.link}
        color='inherit'
        underline='none'
      >
        Projects
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
        href='https://docs.google.com/document/d/e/2PACX-1vTfXnAUP-2S8TW4pS3z7ja_kDifn1wKBTFfMHI3y2NOU3AoPUF5maD-r6iL00wzsxl_5Nwl1wyGq-cI/pub'
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
