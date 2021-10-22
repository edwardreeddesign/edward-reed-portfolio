import React from "react";
import GlobalStyle from "./GlobalStyles";

//animation
import { AnimatePresence } from "framer-motion";
//Components
import Main from "./Pages/Main";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Main />
      </AnimatePresence>
    </div>
  );
}

export default App;
