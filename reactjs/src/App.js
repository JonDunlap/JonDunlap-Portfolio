import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Header from './components/header';
import Introduction from './components/introduction';
import Projects from './components/projects';
import Contact from './components/contact';

import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='flex-start'
        >
          <Header />
          <Introduction />
          <Projects />
          <Contact />
        </Grid>
      </Container>
    </>
  );
}

export default App;
