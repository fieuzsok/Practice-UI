import React, { Component } from "react";
import redcar from "../../assets/images/red-car.jpg";
import silvercar from "../../assets/images/silver-car.jpg";
import steelcar from "../../assets/images/steel-car.jpg";

class CarEx extends Component {
  //state là object kế thừa từ Component react
  //thuộc tính của state thay đổi => re render component ( Update component)

  state = {
    img: redcar,
  };

  changeImg = (img) => {
    this.setState(
      {
        img,
      },
      () => {
        console.log(this.state.img);
      }
    );
  };

  //render one times
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={this.state.img} className="w-100" alt="car"></img>
          </div>
          <div className="col-6">
            <button
              className="mx-2 btn btn-primary"
              onClick={() => this.changeImg(silvercar)}
            >
              Silver
            </button>
            <button
              className="mx-2 btn btn-danger"
              onClick={() => this.changeImg(redcar)}
            >
              Red
            </button>
            <button
              className="mx-2 btn btn-dark"
              onClick={() => this.changeImg(steelcar)}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CarEx;
