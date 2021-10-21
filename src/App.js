import React from "react";
import GlobalStyle from "./GlobalStyles";

//Components
import Hero from "./Components/Hero";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <Hero />
    </div>
  );
}

export default App;
