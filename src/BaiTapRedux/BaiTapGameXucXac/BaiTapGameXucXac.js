/**
 * 1. xây dựng giao diện (chia component dàn layout)
 * 2. xác định nguồi dữ liệu thay đổi của ứng dụng (state). Tổ chức lưu trữ
 *  - biến: tài xỉu
 *  - mảng xúc xắc: [{ma:'',hinhAnh},{ma:'',hinhAnh},{ma:'',hinhAnh}]
 *  - tổng số bàn thắng: number
 *  - tổng số bàn chơi: number
 */
import React, { Component } from "react";
import DanhSachXucXac from "./DanhSachXucXac";
import KetQuaTroChoi from "./KetQuaTroChoi";
import style from "./BaiTapGameXucXac.module.css";

export default class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div
        className={`${style.fontGameXucXac}`}
        style={{
          backgroundImage: "url(./img/BaiTapGameXucXac/bgGame.png)",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <h1 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h1>
        <DanhSachXucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}
