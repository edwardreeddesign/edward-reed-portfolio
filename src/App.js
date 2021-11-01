import React from "react";
import GlobalStyle from "./GlobalStyles";

//animation
import { AnimatePresence } from "framer-motion";
//Components
import Main from "./Pages/Main";
import Header from "./Nav/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ProjectDetail from "./Pages/ProjectDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects/:id">
            <ProjectDetail />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
