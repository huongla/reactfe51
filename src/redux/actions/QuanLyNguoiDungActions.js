import {
  SUA_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../constants/QuanLyNguoiDungConst";

//Định nghĩa action để các component torng ứng dụng
export const xoaNguoiDungAction = (maNguoiDung) => {
  return {
    type: XOA_NGUOI_DUNG,
    maNguoiDung,
  };
};

export const suaNguoiDungAction = (nguoiDung) => {
  return {
    type: SUA_NGUOI_DUNG,
    nguoiDungChinhSua: nguoiDung,
  };
};
