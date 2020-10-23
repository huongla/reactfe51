import React, { Component } from "react";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { xoaNguoiDungAction } from "../redux/actions/QuanLyNguoiDungActions";

class FormComponent extends Component {
  state = {
    values: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    maNguoiDungXoa: "",
  };

  //event là thuộc tính có sẵn trong sự kiên onClick
  handleChangeInput = (event) => {
    //Lấy ra name và value
    //   let name = event.target.name;
    //   let value = event.target.value;
    let { name, value } = event.target;

    //Xử lý value
    let newValues = { ...this.state.values }; //tạo ra value mới giá trị = value cũ
    newValues[name] = value; //Thay đổi giá trị bên trong values

    //Xử lý error
    let newErrors = { ...this.state.errors };
    newErrors[name] = value.trim() === "" ? "Không được trống" : "";

    //Lấy ra attribute types (các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute("types");
    console.log(types);

    //Validation các trường đặc biệt
    if (types === "phoneNumber") {
      const regexNumber = /^[0-9]$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là số";
      }
    }
    if (types === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value.trim())) {
        newErrors[name] = "Dữ liệu không hợp lệ";
      }
    }

    this.setState(
      {
        // [name]: value,
        values: newValues, //Gán values = values mới
        errors: newErrors, //Gán errors = errors mới
      },
      () => console.log(this.state)
    );
  };

  //Giải pháp 1 sử dụng lifecycle componentWillReceiveprops
  //Hàm này chạy khi props thay đổi và trước khi render
  componentWillReceiveProps(newProps) {
    //Khi bấm nút sửa => props thay đổi ta lấy props từ người dùng chỉnh sửa (this.props.nguoiDungChinhSua) ta gán vào state của component =? và cho render value từ state
    this.setState({
      values: newProps.nguoiDungChinhSua,
    });
  }

  render() {
    //Lấy giá trị từ QuanLyNguoiDungReducer.nguoiDungChinhSua về render lên các value
    // let nguoiDung = this.props.nguoiDungChinhSua;
    // let { maNguoiDung, tenNguoiDung, soDienThoai, email } = nguoiDung;
    let { maNguoiDung, tenNguoiDung, soDienThoai, email } = this.state.values;

    return (
      <form
        className="card"
        onSubmit={(event) => {
          //Cản sự kiện submit lại trang của browser
          event.preventDefault();

          //Do preventDefault rồi, mà submit vẫn được do đó phải kiểm tra
          let valid = true;
          //Duyệt thuộc tính trong object values (duyệt thuộc tính trong đối tượng thì dùng eS6 for in)
          for (let tenThuocTinh in this.state.values) {
            if (this.state.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }

          //Duyệt lỗi => tất cả lỗi phải = rỗng
          for (let tenThuocTinh in this.state.errors) {
            if (this.state.errors[tenThuocTinh].trim() != "") {
              valid = false;
            }
          }
          if (!valid) {
            // alert("Dữ liệu không hợp lệ");
            Swal.fire("Thông báo", "Dữ liệu không hợp lệ!", "success");
            return; //chặn sự kiện submit
          }
          Swal.fire("Thông báo", "Thêm người dùng thành công", "success");

          console.log("submit");
        }}
      >
        <div className="card-header bg-dark text-light font-weight-bold">
          <span>THÔNG TIN NGƯỜI DÙNG</span>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <span>Mã người dùng</span>
                  <input
                    // value={this.state.values.maNguoiDung}
                    value={maNguoiDung}
                    className="form-control"
                    name="maNguoiDung"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.maNguoiDung}</p>
                </div>
                <div className="form-group">
                  <span>Tên người dùng</span>
                  <input
                    //value={this.state.values.tenNguoiDung}
                    value={tenNguoiDung}
                    className="form-control"
                    name="tenNguoiDung"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">
                    {this.state.errors.tenNguoiDung}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <span>Số điện thoại</span>
                  <input
                    types="phoneNumber"
                    //value={this.state.values.soDienThoai}
                    value={soDienThoai}
                    className="form-control"
                    name="soDienThoai"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group">
                  <span>Email</span>
                  <input
                    types="email"
                    // value={this.state.values.email}
                    value={email}
                    className="form-control"
                    name="email"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="col-12 text-right">
                <button className="btn btn-success">Thêm người dùng</button>
              </div>
              <div className="col-12 text-right">
                <input
                  name="maNguoiDungXoa"
                  placeholder="nhập vào mã người dùng cần xóa"
                  className="fomr-control"
                  onChange={(e) => {
                    this.setState({ maNguoiDungXoa: e.target.value });
                  }}
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    //dispatch mã người dùng lên reducer
                    // let action = {
                    //   type: "XOA_NGUOI_DUNG",
                    //   maNguoiDung: this.state.maNguoiDungXoa,
                    // };
                    // this.props.dispatch(action);
                    this.props.dispatch(
                      xoaNguoiDungAction(this.state.maNguoiDungXoa)
                    );
                  }}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.QuanLyNguoiDungReducer.nguoiDungChinhSua,
  };
};

export default connect(mapStateToProps)(FormComponent);
