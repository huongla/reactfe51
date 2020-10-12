import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

//Import thư viện kết nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={50} />
          </td>
          <td>
            <button
              onClick={() => this.props.tangGiamSoLuong(spGioHang.maSP, false)}
            >
              -
            </button>
            {spGioHang.soLuong}
            <button
              onClick={() => this.props.tangGiamSoLuong(spGioHang.maSP, true)}
            >
              +
            </button>
          </td>
          <td>{spGioHang.giaBan}</td>
          <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
          <td>
            <button
              onClick={() => this.props.xoaGioHang(spGioHang.maSP)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log("props", this.props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sp</th>
            <th>Tên sp</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}

//Lấy state từ redux store biến thành props của component
//tham số state: Đại diện cho rootReducer
const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.StateBaiTapGioHang.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      //   console.log(maSPClick);
      //Tạo ra action gửi lên reducer
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick,
      };
      //dùng hàm dispatch đưa lên reducer
      dispatch(action);
    },
    tangGiamSoLuong: (maSPClick, tangGiam) => {
      //   console.log(maSPClick, tangGiam);
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        maSPClick,
        tangGiam,
      };
      //dùng hàm dispatch đưa lên reducer
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); //Kết nối giữa gioHangReduxComponent và redux store
