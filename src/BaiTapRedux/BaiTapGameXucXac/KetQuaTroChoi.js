import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  renderKetQua = () => {
    //sử dụng thuộc tính this.props.mangXucXac để hiển thị kết quả
    let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
      return (tongDiemXX += xucXac.so);
    }, 0);
    let ketQua = tongDiem > 9 ? "Tài" : "Xỉu";
    return (
      <div>
        <span className="dispaly-4 text-dark">
          {tongDiem} - {ketQua}
        </span>
      </div>
    );
  };
  render() {
    return (
      <div className="container text-center">
        <div className="display-4">{this.renderKetQua()}</div>
        <div className="display-4">
          Bạn chọn: <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div className="display-4">
          Số bàn thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi:{" "}
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
        <div className="text-center">
          <button
            className="btn btn-success p-2 mt-4"
            onClick={() => {
              this.props.playGame();
            }}
          >
            <span style={{ fontSize: 30 }}>Play Game</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;
      //setInterval là hàm thực thi liên tục theo thời gian quy định => thực thi cho đến khi gọi clearInterval
      let randomXucXac = setInterval(() => {
        const action = {
          type: "RANDOM_XUC_XAC",
        };
        dispatch(action);
        n++;
        if (n === 3) {
          //dừng hàm
          clearInterval(randomXucXac);
          //dispatch action xử lý kết quả
          const actionXLKQ = {
            type: "END_GAME",
          };
          dispatch(actionXLKQ);
        }
      }, 500);
    },
  };
};

//lấy state từ redux về biến thành props của component
const mapStateToProps = (state) => {
  return {
    banChon: state.StateBaiTapGameXucXac.banChon,
    soBanThang: state.StateBaiTapGameXucXac.soBanThang,
    tongSoBanChoi: state.StateBaiTapGameXucXac.tongSoBanChoi,
    mangXucXac: state.StateBaiTapGameXucXac.mangXucXac,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
