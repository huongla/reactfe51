import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   number: 1,
      number: {
        index: 1,
      },
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("render");
    return (
      <div>
        <header>Header Component</header>
        <h1>Lifecycle number: {this.state.number.index}</h1>
        <button
          onClick={() => {
            let newNumber = this.state.number;
            newNumber.index += 1;
            this.setState({
              //   number: this.state.number + 1,
              number: newNumber,
            });
          }}
        >
          +
        </button>
        <ChildComponent number={this.state.number} />
        {/* {this.state.number < 3 ? <ChildComponent /> : ""} */}
      </div>
    );
  }

  componentDidMount() {
    //Gọi api tại DidMount
    console.log("componentDidMount");
  }

  //Hàm này chạy khi setState hoặc thay đổi props
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
