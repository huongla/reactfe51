import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { product, changeGlasses } = this.props;
    return (
      <div className="d-flex m-2" onClick={() => changeGlasses(product)}>
        <img src={product.url} width={200} />
      </div>
    );
  }
}
