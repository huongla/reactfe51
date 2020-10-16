import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachXucXac extends Component {
  renderMangXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img
          className="m-5"
          key={index}
          src={xucXac.hinhAnh}
          style={{ width: 50 }}
        />
      );
    });
  };
  render() {
    return (
      <div className="row mt-5 text-center">
        <div className="col-3">
          <button
            className="p-5 btn btn-success"
            onClick={() => {
              this.props.datCuoc("Tài");
            }}
          >
            <span className="display-4">Tài</span>
          </button>
        </div>

        <div className="col-6">
          {this.renderMangXucXac()}
          {/* <img
            className="m-5"
            src="./img/BaiTapGameXucXac/1.png"
            style={{ width: 50 }}
          />
          <img
            className="m-5"
            src="./img/BaiTapGameXucXac/1.png"
            style={{ width: 50 }}
          />
          <img
            className="m-5"
            src="./img/BaiTapGameXucXac/1.png"
            style={{ width: 50 }} 
          />  */}
        </div>

        <div className="col-3">
          <button
            className="p-5 btn btn-danger"
            onClick={() => {
              this.props.datCuoc("Xỉu");
            }}
          >
            <span className="display-4">Xỉu</span>
          </button>
        </div>
      </div>
    );
  }
}

//Định nghĩa hàm lấy dữ liệu state từ redux store về component
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.StateBaiTapGameXucXac.mangXucXac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      //Tạo ra action
      const action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      //Dùng hàm dispatch đưa dữ liệu lên reducer
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachXucXac);
