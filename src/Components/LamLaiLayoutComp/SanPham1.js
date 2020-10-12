import React, { Component } from "react";

export default class SanPham1 extends Component {
  handleDetail = () => {
    const currentProduct = this.props.product;
    this.props.xuLyChiTiet1(currentProduct);
  };
  handleCL = () => {
    const currentProduct = this.props.product;
    this.props.handleCardList(currentProduct);
  };
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.product.hinhAnh} alt="" />
        <div className="card-body">
          <h4 className="card-title">{this.props.product.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleDetail}>
            Chi tiết
          </button>
          <button className="btn btn-danger" onClick={this.handleCL}>
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
