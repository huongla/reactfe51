import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  state = {
    ten: "Nguyễn Văn Chuối",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>Props</h2>
        <FunctionProps
          //cách truyền props trong reactjs
          hoVaTen={this.state.ten}
          lopCuaTui={this.state.lop}
        />
        <ClassProps hoVaTen={this.state.ten} lopCuaTui={this.state.lop} />
      </div>
    );
  }
}
