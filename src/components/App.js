import React from "react";
import "../index.css";
import Menu from "./Menu";
import Hero from "./Hero";
import Info from "./Info";
class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <Hero />
        <Info />
      </>
    );
  }
}

export default App;
