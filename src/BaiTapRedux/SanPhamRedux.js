import React, { Component } from 'react'

export default class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;

        return (
                <div classname="card text-left">
                    <img style={{width:'100%',height:300}} classname="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div classname="card-body">
                        <h4 classname="card-title">{sanPham.tenSP}</h4>
                        <p classname="card-text">{sanPham.giaBan}</p>
                        <button className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                </div>
        )
    }
}
