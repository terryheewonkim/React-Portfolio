import ScrollTop from './components/ScrollTop';
// Router
import { Switch, Route, useLocation } from 'react-router-dom';
// Components
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Work from './pages/Work';
import Contact from './pages/Contact';
// global style
import GlobalStyle from './components/GlobalStyle';
// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  // To scroll to top of the page on page refresh
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0.5);
  };

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
