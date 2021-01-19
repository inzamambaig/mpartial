import React from "react";
import "../index.css";
import Menu from "./Menu";
import Hero from "./Hero";
class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <Hero />
      </>
    );
  }
}

export default App;
