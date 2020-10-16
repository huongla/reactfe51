//File khai báo tất cả các state của ứng dụng
import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BTGioHangReducer from "./BTGioHangReducer";
import BaiTapGameXucXacReducer from "./BaiTapGameXucXacReducer";

//state (store) tổng của ứng dụng
export const rootReducer = combineReducers({
  //nơi khai báo các state (store con) theo từng nghiệp vụ
  StateBaiTapGioHang: BaiTapGioHangReducer,
  // BTGioHangReducer: BTGioHangReducer,
  StateBaiTapGameXucXac: BaiTapGameXucXacReducer,
});
