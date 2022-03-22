import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    return (
      <div>
        <h2>Pure Component {this.props.name}</h2>
      </div>
    );
  }
}

export default PureComp;
