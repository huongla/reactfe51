import React, { Component } from "react";
import glassesData from "./data.json";
import Product from "./Product";
import style from "./BaiTapStateProps.module.css";
import TryGlassesDisplay from "./TryGlassesDisplay";

export default class GlassesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: glassesData[0],
    };
  }
  renderProduct = () => {
    return glassesData.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          changeGlasses={this.changeGlasses}
        />
      );
    });
  };

  changeGlasses = (currentProduct) => {
    this.setState({
      productDetail: currentProduct,
    });
  };

  render() {
    return (
      <div>
        <div className="container mt-3">
          <TryGlassesDisplay productDetail={this.state.productDetail} />
        </div>

        <div className="container">
          <div className={`row ` + `${style.glassesListDisplay}`}>
            {this.renderProduct()}
          </div>
        </div>
      </div>
    );
  }
}
