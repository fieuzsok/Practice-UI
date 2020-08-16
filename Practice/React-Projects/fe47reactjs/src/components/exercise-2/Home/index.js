import React, { Component } from "react";
import Header from "../Header";
import Carousel from "../Carousel";
import Content from "../Content";
import Footer from "../Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Carousel></Carousel>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
