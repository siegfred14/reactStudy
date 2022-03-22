import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Siegfred",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Siegfred",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h2>ParentComp</h2>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
