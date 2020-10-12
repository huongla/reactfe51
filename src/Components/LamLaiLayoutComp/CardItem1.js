import React, { Component } from "react";

export default class CardItem1 extends Component {
  render() {
    console.log(this.props.card.soluong);
    return (
      <tr className="card-item">
        <td>{this.props.card.maSP}</td>
        <td>{this.props.card.tenSP}</td>
        <td>
          <img src={this.props.card.hinhAnh} width={50} alt="abc" />
        </td>
        <td>
          <button>-</button>
          <span>{this.props.card.soluong} </span>
          <button>+</button>
        </td>
        <td>{this.props.card.giaBan}</td>
        <td>{this.props.card.giaBan}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
