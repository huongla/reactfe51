import React, { Component } from "react";
import { connect } from "react-redux";

class KQTroChoi1 extends Component {
  renderKQ = () => {
    console.log(this.props.mangXucXac1);
    // let tongDiem = this.props.mangXucXac1.reduce(
    //   (tongDiemXX, xucXac, index) => {
    //     return (tongDiemXX += xucXac.soXX);
    //   },
    //   0
    // );
    let ketQua = this.props.tongDiemCacLuotChoi > 9 ? "Tài" : "Xỉu";
    console.log("tongDiemCLC", this.props.tongDiemCacLuotChoi);
    return (
      <div>
        <span className="dispaly-4 text-dark">
          {this.props.tongDiem1LuotChoi} - {ketQua}
        </span>
      </div>
    );
  };
  render() {
    return (
      <div className="container text-center">
        <div className="display-4">{this.renderKQ()}</div>
        <div className="display-4">
          Bạn chọn: <span className="text-danger">{this.props.banChon1}</span>
        </div>
        <div className="display-4">
          Số bàn thắng:{" "}
          <span className="text-warning">{this.props.soBanThang1}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi:{" "}
          <span className="text-primary">{this.props.tongSoBanChoi1}</span>
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

const mapStateToProps = (state) => {
  return {
    banChon1: state.StateBTGameXucXac.banChon1,
    soBanThang1: state.StateBTGameXucXac.soBanThang1,
    tongSoBanChoi1: state.StateBTGameXucXac.tongSoBanChoi1,
    mangXucXac1: state.StateBTGameXucXac.mangXucXac1,
    tongDiem1LuotChoi: state.StateBTGameXucXac.tongDiem1LuotChoi,
    tongDiemCacLuotChoi: state.StateBTGameXucXac.tongDiemCacLuotChoi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;
      let randomXX = setInterval(() => {
        const action = {
          type: "RANDOM_XX",
        };
        dispatch(action);
        if (n <= 2) {
          const action = {
            type: "TINH_DIEM",
          };
          dispatch(action);
        }

        n++;
        if (n === 2) {
          clearInterval(randomXX);
          const actionKQXL = {
            type: "END_GAME",
          };
          dispatch(actionKQXL);
        }
      }, 500);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KQTroChoi1);
