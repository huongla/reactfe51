import React, { Component } from "react";

export default class DemoListAndKeys extends Component {
  //   danhSachKhoaHoc = [<li>NodeJS</li>, <li>ReactJS</li>, <li>VueJS</li>];
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];

  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };
  //nâng cao
  //   renderDanhSachKhoaHoc = () => this.danhSachKhoaHoc.map((khoaHoc, index) => <li>{khoaHoc}</li>);

  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh Sách Khóa Học</h3>
        <ul>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>VueJS</li>
        </ul>
        {/* <ul>{this.danhSachKhoaHoc}</ul> */}
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
