import React from "react";
import "../index.css";
import Menu from "./Menu";
import Hero from "./Hero";
import Info from "./Info";
import Image from "./Image";
import Working from "./Working";
import WaterFall from "./WaterFall";
import ExampleDelivery from "./ExampleDelivery";
import Contact from "./Contact";
import Footer from "./Footer";
class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <Hero />
        <Info />
        <Image />
        <Working />
        <WaterFall />
        <ExampleDelivery />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
