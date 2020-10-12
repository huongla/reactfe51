import React, { Component } from "react";

export default class ClassProps extends Component {
  constructor(props) {
    super();
  }
  render() {
    //console.log(this.props); //props này được kế thừa từ Component của react
    return (
      <div>
        <h3>ClassProps</h3>
        <p>tên: {this.props.hoVaTen}</p>
        <p>lớp: {this.props.lopCuaTui}</p>
      </div>
    );
  }
}
