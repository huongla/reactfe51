import React, { Component } from 'react'

export default class Databinding extends Component {
    //thuộc tính của lớp đối tượng => sử dụng được nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: 'Nguyễn Văn Tèo',
       
    }

    //Phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng
    renderHocVien = () => {
        return <div className="card text-white bg-primary">
            <img className="card-img-top" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                <p className="card-text">Mã số: {this.hocVien.ma}</p>
            </div>
        </div>

    }
    render() {
        //binding bằng biến
        let title = 'CYBERSOFT';
        let imgSrc = 'https://picsum.photos/200/200';

        //binding bằng hàm
        const renderImg = () => {
            //Giá trị hàm muốn render ra giao diện phải trả về chuỗi, số hoặc jsx
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                </div>
            </div>
        }
        return (
            <div>
                <div id="title">{title}</div>
                <div className="w-25"></div>
                <img src={imgSrc} />
                <input className="w-25 form-control" value={title} />

                {/* render hàm */}
                <div className="w-50">
                    {renderImg()}
                </div>
                <h1>Thông Tin Học Viên</h1>
                {/* truy xuất thuộc tính của lớp đối tượng phải dùng con trỏ this */}
                <ul>
                    <li>Mã học viên: {this.hocVien.ma}</li>
                    <li>Tên học viên: {this.hocVien.tenHocVien}</li>
                    <li>Hình ảnh: <img src={this.hocVien.avatar} width="200" height="200" /></li>
                </ul>
                <div className="w-25">
                    {this.renderHocVien()}
                </div>
            </div>
        )
    }
}
