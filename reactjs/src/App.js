import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Header from './components/header';
import Introduction from './components/introduction';
import Projects from './components/projects';
import Contact from './components/contact';

import './App.css';

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

export default function App() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <Container>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='flex-start'
          spacing={4}
        >
          <Header />
          <Grid item container component='main' spacing={4}>
            <Introduction />
            <Projects />
          </Grid>
          <Contact />
        </Grid>
      </Container>
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
    </>
  );
}
