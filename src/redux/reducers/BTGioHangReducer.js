const stateGioHang = {
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
export const GioHangReducer = (state = stateGioHang, action) => {
  return { ...state };
};

// export default BTGioHangReducer;
