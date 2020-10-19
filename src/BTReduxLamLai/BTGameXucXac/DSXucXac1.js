import React, { Component } from "react";
import { connect } from "react-redux";

class DSXucXac1 extends Component {
  renderMangXucXac1 = () => {
    return this.props.mangXucXac1.map((xx, index) => {
      return (
        <img
          className="m-5"
          key={index}
          src={xx.hinhAnhXX}
          style={{ width: 60 }}
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
        <div className="col-6 ">{this.renderMangXucXac1()}</div>
        <div className="col-3 ">
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

const mapStateToProps = (state) => {
  return {
    mangXucXac1: state.StateBTGameXucXac.mangXucXac1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      const action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
      //console.log(taiXiu);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DSXucXac1);
