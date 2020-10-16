import React, { Component } from "react";
import style from "./BaiTapStateProps.module.css";

export default class TryGlassesDisplay extends Component {
  render() {
    let { productDetail } = this.props;
    return (
      <div className="row d-flex justify-content-center">
        <div className={style.modelDiv}>
          <img src="./img/model.jpg" />
          <div className={style.glasses}>
            <img src={productDetail.url} />
          </div>
          <div className={style.description}>
            <h6 className="text-center">
              {productDetail.name} - {productDetail.price}${" "}
            </h6>
            <p className="text-center">{productDetail.desc}</p>
          </div>
        </div>
        <div className={style.modelDiv}>
          <img src="./img/model.jpg" />
        </div>
      </div>
    );
  }
}
