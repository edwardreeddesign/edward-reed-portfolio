import React from "react";
import GlobalStyle from "./GlobalStyles";

//animation
import { AnimatePresence } from "framer-motion";
//Components
import Main from "./Pages/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Main />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
