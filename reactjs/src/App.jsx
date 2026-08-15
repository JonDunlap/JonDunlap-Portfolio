import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Introduction from './components/introduction';
import Projects from './components/projects';
import ScrollTop from './components/scrollTop';

import './App.css';

export default function App() {
  return (
    <>
      <Container>
        <Grid container direction='column' spacing={4}>
          <Header />
          <Grid item container component='main' spacing={4}>
            <Introduction />
            <About />
            <Projects />
          </Grid>
          <Contact />
        </Grid>
      </Container>
      <ScrollTop />
    </>
  );
}
