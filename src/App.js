import React from "react";
// import logo from './logo.svg';
import "./App.css";
import BaiTapChonMauXe from "./BaiTapChonMauXe";
import BaiTapLayout1 from "./Components/BaiTapLayoutComponent/BaiTapLayout1";
import DemoStateFul from "./Components/DemoStateFul";
import DemoStateless from "./Components/DemoStateless";
import Databinding from "./Databinding/Databinding";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import HandEvent from "./HandleEvent/HandEvent";
import DemoListAndKeys from "./ListAndKeys/DemoListAndKeys";
import DemoProps from "./Pros/DemoProps";
import BaiTapGioHang from "./BaiTapGioHang";
import BTGioHang from "./Components/LamLaiLayoutComp";
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHangRedux";
import BaiTapVongLap from "./BaiTapDanhSachPhim/BaiTapVongLap";
import BaiTapGameXucXac from "./BaiTapRedux/BaiTapGameXucXac/BaiTapGameXucXac";
import BaiTapStateProps from "./BaiTapStateProps/BaiTapStateProps";
import BTGioHangRedux1 from "./BaiTapRedux/BTGioHangRedux1";

function App() {
  return (
    <div className="App">
      {/* <DemoStateless/>
      <DemoStateFul/> */}
      {/* <BaiTapLayout1/> */}
      {/* <Databinding /> */}
      {/* <HandEvent /> */}
      {/* <DemoConditionalAndState/> */}
      {/* <BaiTapChonMauXe /> */}
      {/* <DemoListAndKeys /> */}
      {/* <DemoProps /> */}
      {/* <BaiTapGioHang /> */}
      {/* <BTGioHang /> */}
      {/* <BaiTapVongLap /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BTGioHangRedux1 /> */}
      <BaiTapGameXucXac />
      {/* <BaiTapStateProps /> */}
    </div>
  );
}

export default App;
