//File khai báo tất cả các state của ứng dụng
import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapGameXucXacReducer from "./BaiTapGameXucXacReducer";
import BTGameXucXacReducer1 from "./BTGameXucXacReducer1";
import BTBurgerReducer from "./BTBurgerReducer";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer";

//state (store) tổng của ứng dụng
export const rootReducer = combineReducers({
  //nơi khai báo các state (store con) theo từng nghiệp vụ
  StateBaiTapGioHang: BaiTapGioHangReducer,
  StateBaiTapGameXucXac: BaiTapGameXucXacReducer,
  StateBTGameXucXac: BTGameXucXacReducer1,
  StateBTBurger: BTBurgerReducer,
  QuanLyNguoiDungReducer,
});
