import React, { Component } from "react";
import { connect } from "react-redux";
import FormComponent from "./FormComponent";
import {
  suaNguoiDungAction,
  xoaNguoiDungAction,
} from "../redux/actions/QuanLyNguoiDungActions";
import NewFormComponent from "./NewFormComponent";

class DanhSachNguoiDung extends Component {
  renderDSNguoiDung = () => {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <td>{nguoiDung.maNguoiDung}</td>
          <td>{nguoiDung.tenNguoiDung}</td>
          <td>{nguoiDung.soDienThoai}</td>
          <td>{nguoiDung.email}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                let action = suaNguoiDungAction(nguoiDung);
                this.props.dispatch(action);
              }}
            >
              Sửa
            </button>{" "}
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                //Gọi hàm trong mapDispatchToProps

                //Hàm này khi sử dụng connect với redux sẽ tự có props này
                // let action = {
                //   type: "XOA_NGUOI_DUNG",
                //   maNguoiDung: nguoiDung.maNguoiDung,
                // };
                // this.props.dispatch(action);
                this.props.dispatch(xoaNguoiDungAction(nguoiDung.maNguoiDung));
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        {/* <FormComponent /> */}
        <NewFormComponent />
        <table className="table">
          <thead>
            <tr>
              <th>Mã người dùng</th>
              <th>Tên người dùng</th>
              <th>Số điện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.renderDSNguoiDung()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps, null)(DanhSachNguoiDung);
