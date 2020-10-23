import { XOA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst";
import { SUA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst";

const stateDefault = {
  mangNguoiDung: [
    {
      maNguoiDung: 1,
      tenNguoiDung: "Nguyen Van A",
      soDienThoai: "0909090909",
      email: "nguuyenvana@gmail.com",
    },
    {
      maNguoiDung: 2,
      tenNguoiDung: "Nguyen Van B",
      soDienThoai: "0908080909",
      email: "nguuyenvanb@gmail.com",
    },
  ],
  nguoiDungChinhSua: {
    maNguoiDung: 1,
    tenNguoiDung: "Nguyen Van A",
    soDienThoai: "0909090909",
    email: "nguuyenvana@gmail.com",
  },
  stateForm: {
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
  },
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  console.log(action);
  switch (action.type) {
    case XOA_NGUOI_DUNG: {
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      console.log(mangNguoiDungCapNhat);
      mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter(
        (nd) => nd.maNguoiDung != action.maNguoiDung
      );
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    case SUA_NGUOI_DUNG: {
      //Lấy người dùng được click từ nút sửa
      let nguoiDungDuocClick = { ...action.nguoiDungChinhSua };
      //Cập nhật state người dùng chỉnh sửa = người dùng được click
      state.nguoiDungChinhSua = nguoiDungDuocClick;
      //Xử lý theo cách 2 <NewFormComponent></NewFormComponent>
      state.stateForm = { ...state.stateForm, values: nguoiDungDuocClick };
      return { ...state };
    }
    case "HANDLE_CHANGE_INPUT": {
      state.stateForm = { ...action.newState };
      return { ...state };
    }
    case "CAP_NHAT_THONG_TIN": {
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      let index = mangNguoiDungCapNhat.findIndex(
        (nd) => nd.maNguoiDung === action.nguoiDungCapNhat.maNguoiDung
      );
      mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    case "THEM_NGUOI_DUNG": {
      const mangNguoiDungCapNhat = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
