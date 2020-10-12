/**
 * 1.dàn layout-done
 * 2.xác định dữ liệu thay đổi và lưu trong state
 * 3.lấy data trong state ra đi binding ra jsx
 * 4.render danh sách sản phẩm
 * 5.xây dựng chức năng xem chi tiết
 * 6.xây dựng chức năng thêm vào giỏ hàng
 * 7.xây dựng chức năng tăng giảm số lượng
 * 8.xây dựng chức năng xóa sản phẩm khỏi giỏ hàng
 * 9.xây dựng chức năng hiển thị tổng số sản phẩm trong giỏ hàng
 */
import React, { Component } from "react";
import SanPham1 from "./SanPham1";
import dsSanPham from "./data.json";
import Modal1 from "./Modal1";

export default class BTGioHang extends Component {
  state = {
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [],
  };
  handleChiTietSP = (spChiTiet) => {
    this.setState({
      spChiTiet,
    });
  };
  handleCardList = (sp) => {
    //tìm vị trí xem có tồn tại chưa
    const index = this.state.cardList.findIndex((card) => {
      return card.maSP === sp.maSP;
    });

    let cardList = [...this.state.cardList];
    if (index !== -1) {
      cardList[index].soluong += 1;
    } else {
      const newCard = { ...sp, soluong: 1 };
      cardList = [...cardList, newCard];
    }
    this.setState({
      cardList,
    });
  };
  renderDSSanPham = () => {
    return dsSanPham.map((sp, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham1
            product={sp}
            xuLyChiTiet1={this.handleChiTietSP}
            handleCardList={this.handleCardList}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({this.state.cardList.soLuong})
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">{this.renderDSSanPham()}</div>
          </div>
          <Modal1 cardList={this.state.cardList} />
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.spChiTiet.hinhAnh}
                alt=""
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.spChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.spChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.spChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.spChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.state.spChiTiet.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.spChiTiet.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
