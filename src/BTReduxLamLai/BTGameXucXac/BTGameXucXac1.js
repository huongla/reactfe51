import React, { Component } from "react";
import DanhSachXucXac from "../../BaiTapRedux/BaiTapGameXucXac/DanhSachXucXac";
import style from "./BaiTapGameXucXac.module.css";
import DSXucXac1 from "./DSXucXac1";
import KQTroChoi1 from "./KQTroChoi1";

export default class BTGameXucXac1 extends Component {
  render() {
    return (
      <div
        className={style.fontGameXucXac}
        style={{ backgroundImage: "url(./img/BaiTapGameXucXac/bgGame.png)" }}
      >
        <h1 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h1>
        <DSXucXac1 />
        <KQTroChoi1 />
      </div>
    );
  }
}
