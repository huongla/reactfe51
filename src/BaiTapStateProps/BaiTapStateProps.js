/**
 * Các bước thực hiện
 * 1. Dàn layout - done
 * 2. Import data - done
 * 3. xác định dữ liệu thay đổi và lưu state
 * 4. lấy data trong state ra binding jsx
 * 5. render ra danh sách sản phẩm
 * 6. xây dựng chức năng click mắt kính trong list, hiện mắt kính trên người mẫu
 */
import React, { Component } from "react";
import GlassesList from "./GlassesList";
import style from "./BaiTapStateProps.module.css";

export default class BaiTapStateProps extends Component {
  render() {
    return (
      <div
        className={`${style.mainDiv}`}
        style={{ backgroundImage: "url(./img/background.jpg)" }}
      >
        <div className={`${style.overlayDiv}`}>
          <h1 className={`${style.titleH1}`}>TRY GLASSES APP ONLINE</h1>
          <GlassesList />
        </div>
      </div>
    );
  }
}
