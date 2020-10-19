import React, { Component } from "react";
import BurgerCompRedux from "./BurgerCompRedux";
// import MenuCompRedux from "./MenuCompRedux";

export default class BTBurgerRedux extends Component {
  render() {
    return (
      <div className=" container">
        <h1 className="text-center text-primary bg-white">
          Game Đặt Bánh Buger
        </h1>

        <BurgerCompRedux />
      </div>
    );
  }
}
