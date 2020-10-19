import React, { Component } from "react";
import style from "./burger.css";
import style1 from "./burgerBread.module.css";
import { connect } from "react-redux";

class BurgerCompRedux extends Component {
  renderBurgerInside = () => {
    let { burger } = this.props;
    let content = [];
    for (let propBurger in burger) {
      //console.log(propBurger, burger[propBurger]);
      let burgerContent = [];
      for (let i = 0; i < burger[propBurger]; i++) {
        burgerContent.push(<div key={i} className={propBurger}></div>);
      }
      content.push(burgerContent);
    }
    return content;

    //console.log(Object.entries(burger)); //hàm này từ Object trả về mảng
    // return Object.entries(burger).map(([propBurger, value], index) => {
    //   //console.log(item);
    //   let burgerContent = [];
    //   for (let i = 0; i < value; i++) {
    //     // burgerContent.push(<div key={i} className={`${style.salad}`}></div>);
    //     burgerContent.push(<div key={i} className={propBurger}></div>);
    //   }
    //   return burgerContent;
    // });
  };
  renderMenu = () => {
    let { menu } = this.props;
    return Object.entries(menu).map(([propMenu, price], index) => {
      return (
        <tr>
          <td>{propMenu}</td>
          <td>
            <button className="btn btn-danger">+</button>{" "}
            <button className="btn btn-danger">-</button>
          </td>
          <td>{price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="row m-5">
        <div className="col-7">
          <h3 className="mb-2 text-center">Cửa Hàng Buger</h3>
          <div className="col text-center">
            <div className={style1.breadTop}></div>
            {this.renderBurgerInside()}

            <div className={style1.breadBottom}></div>
          </div>
        </div>
        <div className="col-5">
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
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    burger: state.StateBTBurger.burger,
    menu: state.StateBTBurger.menu,
    total: state.StateBTBurger.total,
  };
};

export default connect(mapStateToProp, null)(BurgerCompRedux);
