import BaiTapGioHangRedux from "../../BaiTapRedux/BaiTapGioHangRedux";

//Gía trị ban đầu của state
const stateDefault = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tensP: "Iphone",
    //   hinhAnh: "https://picsum.photos/50",
    //   soLuong: 1,
    //   donGia: 1000,
    // },
  ],
};

//Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //xử lý cập nhật lại state, phải clone ra 1 mảng mới
      let gioHangUpdate = [...state.gioHang];
      //Tìm sp có trong giỏ hàng hay không
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGH);
      }
      //Gán lại state cũ = giá trị mới => tương đương với việc setState tại component
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangUpdate = [...state.gioHang];
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.maSPClick
      );
      if (index !== -1) {
        gioHangUpdate.splice(index, 1);
      }
      //cập nhật lại giỏ hàng
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHangUpdate = [...state.gioHang];
      let spGioHang = gioHangUpdate.find((sp) => sp.maSP === action.maSPClick);
      console.log(spGioHang);
      if (spGioHang) {
        if (action.tangGiam) {
          spGioHang.soLuong += 1;
        } else {
          if (spGioHang.soLuong > 1) {
            spGioHang.soLuong -= 1;
          }
        }
      }
      //cập nhật lại giỏ hàng
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
  }
  return { ...state };
};
export default BaiTapGioHangReducer;
