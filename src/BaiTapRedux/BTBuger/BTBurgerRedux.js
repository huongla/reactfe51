import React, { Component } from "react";
import BurgerCompRedux from "./BurgerCompRedux";
import MenuCompRedux from "./MenuCompRedux";
// import MenuCompRedux from "./MenuCompRedux";

export default class BTBurgerRedux extends Component {
  render() {
    return (
      <div className=" container">
        <h1 className="text-center text-primary bg-white">
          Game Đặt Bánh Buger
        </h1>
        <div className="row mt-5">
          <div className="col-7">
            <BurgerCompRedux />
          </div>
          <div className="col-5">
            <MenuCompRedux />
          </div>
        </div>
      </div>
    );
  }
}
