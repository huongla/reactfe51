/**
 * khi gặp trường hợp định nghĩa 1 phương thức khác component thì
 * phải setState ở nơi định nghĩa state
 * bên component khác mình gọi phương thức đó qua cách thức truyền props
 */
import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    const currentProduct = this.props.product;
    this.props.xuLyChiTiet(currentProduct);
    // console.log("run");
  };

  render() {
    // console.log(this.props);
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.product.hinhAnh} alt="" />
        <div className="card-body">
          <h4 className="card-title">{this.props.product.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleDetail}>
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              const currentProduct = this.props.product;
              this.props.handleCardList(currentProduct);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
