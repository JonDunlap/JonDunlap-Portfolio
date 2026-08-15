import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import KeyboardArrowUpIcon from '@mui/icons-material/esm/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: 'inherit',
  },
  icon: {
    backgroundColor: 'green',
    color: '#fff',
    '&:hover': {
      color: '#000',
    },
  },
}));

export default function ScrollTop() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = document.querySelector('#top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        <Fab
          className={classes.icon}
          size='small'
          aria-label='scroll back to top'
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}
