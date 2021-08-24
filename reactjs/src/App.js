import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from './components/header';
import Introduction from './components/introduction';
import Projects from './components/projects';
import Contact from './components/contact';

import './App.css';

function App() {
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
          <Introduction />
          <Projects />
          <Contact />
        </Grid>
      </Container>
    </>
  );
}

export default App;
