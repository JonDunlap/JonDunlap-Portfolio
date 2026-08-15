import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Introduction from './components/introduction';
import Projects from './components/projects';
import ScrollTop from './components/scrollTop';

import './App.css';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
