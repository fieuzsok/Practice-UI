import React, { Component } from "react";
import CardItem from "../CardItem";

class Content extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h1>What We Do</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                laborum consequuntur iste odit doloribus fugiat, qui repellendus
                tenetur unde ex ad laudantium quibusdam. Atque, voluptatem
                doloribus eaque consequatur praesentium blanditiis?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                laborum consequuntur iste odit doloribus fugiat, qui repellendus
                tenetur unde ex ad laudantium quibusdam. Atque, voluptatem
                doloribus eaque consequatur praesentium blanditiis?
              </p>
            </div>
            <div className="col-sm-4">
              <h1>Contact US</h1>
              <p>CyberSoft</p>
              <p>Su Van Hanh, quận 10, Tp.HCM</p>
              <p>website: cybersoft.edu.vn</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              {/* item */}
              <CardItem></CardItem>
            </div>
            <div className="col-sm-4">
              {/* item */}
              <CardItem></CardItem>
            </div>
            <div className="col-sm-4">
              {/* item */}
              <CardItem></CardItem>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
