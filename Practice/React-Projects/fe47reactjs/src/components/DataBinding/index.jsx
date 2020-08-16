import React, { Component } from "react";

class Databinding extends Component {
  name = "La Xuân Thảo";
  isCute = true;
  render() {
    return (
      <div>
        <h1>Demo Databinding react js</h1>
        <p>Author: {this.name}</p>
        <p>Cute: {this.isCute ? "Yes" : "No"}</p>
      </div>
    );
  }
}

export default Databinding;
