import React, { Component } from "react";
import { connect } from "react-redux";

class MenuCompRedux extends Component {
  renderMenu = () => {
    let { menu } = this.props;
    return Object.entries(menu).map(([propMenu, price], index) => {
      return (
        <tr>
          <td>{propMenu}</td>
          <td>
            <button>+</button> <button>-</button>
          </td>
          <td>{price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="m-5">
        <h3 className="text-center">Chọn thức ăn</h3>
        <table className="table">
          <thead>
            <tr>
              <td>Thức ăn</td>
              <td></td>
              <td>Giá</td>
            </tr>
          </thead>
          <tbody>
            {this.renderMenu()}
            <tr>
              <td className="colspan:2">Thành tiền</td>
              <td>30 $</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    menu: state.StateBTBurger.menu,
    total: state.StateBTBurger.total,
  };
};

export default connect(mapStateToProp, null)(MenuCompRedux);
