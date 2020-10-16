import React, { Component } from "react";
import DSSanPhamRedux1 from "./DSSanPhamRedux1";
import ModalGioHangRedux1 from "./ModalGioHangRedux1";

export default class BTGioHangRedux1 extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-danger text-center">Bài Tập Giỏ Hàng Redux</h3>
        <ModalGioHangRedux1 />
        <DSSanPhamRedux1 />
      </div>
    );
  }
}
