import React from "react";
import "../index.css";
import Menu from "./Menu";
import Hero from "./Hero";
import Info from "./Info";
import Image from "./Image";
import Working from "./Working";
class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <Hero />
        <Info />
        <Image />
        <Working />
      </>
    );
  }
}

export default App;
