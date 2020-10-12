import React, { Component } from 'react'
import SanPhamGHRedux from './SanPhamGHRedux'

//Import thư viện kết nối react component và redux store
import {connect} from 'react-redux';

class GioHangRedux extends Component {
    
    renderGioHang = ()=>{
        return this.props.gioHang.map((spGioHang,index)=>{
            return <SanPhamGHRedux spGioHang={spGioHang}/>
        })
    }
    render() {
        console.log('props',this.props)
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
                <tbody>
                    {this.renderGioHang()}
                </tbody>
            </table>
        )
    }
}

//Lấy state từ redux store biến thành props của component
//tham số state: Đại diện cho rootReducer
const mapStateToProps = (rootReducer) => {
    return {
        gioHang:rootReducer.StateBaiTapGioHang.gioHang
    }
}

export default connect(mapStateToProps)(GioHangRedux); //Kết nối giữa gioHangReduxComponent và redux store