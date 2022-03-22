import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render");
    return (
      <div>
        <h2>Pure Component {this.props.name}</h2>
      </div>
    );
  }
}

export default PureComp;
