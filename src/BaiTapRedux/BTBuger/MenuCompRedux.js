import React, { Component } from "react";
import { connect } from "react-redux";

class MenuCompRedux extends Component {
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.addInside(propsMenu, 1);
              }}
            >
              +
            </button>
            {"  "}
            {burger[propsMenu]}
            {"  "}
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.addInside(propsMenu, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="text-center">Chọn thức ăn</h3>
        <table className="table">
          <thead>
            <tr>
              <td>Thức ăn</td>
              <td></td>
              <td>Giá</td>
              <td>Thành tiền</td>
            </tr>
          </thead>
          <tbody>{this.renderMenu()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2"></td>
              <td>Tổng cộng</td>
              <td>{this.props.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    menu: state.StateBTBurger.menu,
    total: state.StateBTBurger.total,
    burger: state.StateBTBurger.burger,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addInside: (propsBurger, amount) => {
      const action = {
        type: "ADD_INSIDE",
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(MenuCompRedux);
