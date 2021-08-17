import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

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
        <Header />
        <Introduction />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;
