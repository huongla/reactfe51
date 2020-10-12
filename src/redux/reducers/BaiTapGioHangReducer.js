import BaiTapGioHangRedux from "../../BaiTapRedux/BaiTapGioHangRedux";

//Gía trị ban đầu của state
const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tensP: "Iphone",
      hinhAnh: "https://picsum.photos/50",
      soLuong: 1,
      donGia: 1000,
    },
  ],
};

//Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefault, action) => {
  return { ...state };
};
export default BaiTapGioHangReducer;
