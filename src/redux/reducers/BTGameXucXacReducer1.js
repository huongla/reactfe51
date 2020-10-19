//tạo state
const stateDefault = {
  mangXucXac1: [
    { soXX: 1, hinhAnhXX: "./img/BaiTapGameXucXac/1.png" },
    { soXX: 1, hinhAnhXX: "./img/BaiTapGameXucXac/1.png" },
    { soXX: 1, hinhAnhXX: "./img/BaiTapGameXucXac/1.png" },
  ],
  banChon1: "Tài",
  tongDiem1LuotChoi: 0,
  tongDiemCacLuotChoi: 0,
  soBanThang1: 0,
  tongSoBanChoi1: 0,
};
const BTGameXucXacReducer1 = (state = stateDefault, action) => {
  let tongDiem1LuotChoi = 0;
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon1 = action.taiXiu;
      return { ...state };
    }
    case "RANDOM_XX": {
      let mangXucXacNgauNhien = [];
      let n = 0;

      for (var i = 0; i < 3; i++) {
        const soNgauNhien = Math.floor(Math.random() * 6) + 1;
        const xucXacNgauNhien = {
          soXX: soNgauNhien,
          hinhAnhXX: `./img/BaiTapGameXucXac/${soNgauNhien}.png`,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
        tongDiem1LuotChoi += soNgauNhien;
      }
      state.mangXucXac1 = mangXucXacNgauNhien;
      state.tongDiem1LuotChoi = tongDiem1LuotChoi;
      return { ...state };
    }

    case "TINH_DIEM": {
      let tongDiemCLC = 0;
      tongDiemCLC += state.tongDiem1LuotChoi;
      console.log("tongDiemCLC", action.tongDiem1LuotChoi);
      state.tongDiemCacLuotChoi = tongDiemCLC;
      return { ...state };
    }

    case "END_GAME": {
      let tongDiem = state.mangXucXac1.reduce((tongDiemXX, xucXac, index) => {
        return (tongDiemXX += xucXac.soXX);
      }, 0);
      if (
        (tongDiem > 9 && state.banChon1 === "Tài") ||
        (tongDiem <= 9 && state.banChon1 === "Xỉu")
      ) {
        state.soBanThang1 += 1;
      }
      state.tongSoBanChoi1 += 1;
      return { ...state };
    }
  }
  return { ...state };
};
export default BTGameXucXacReducer1;
