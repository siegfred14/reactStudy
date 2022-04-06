// Context provides a way to pass down data through a component tree without having to pass props down manually at every level.
// Steps to implementing a context
// 1. Create the context
// 2. Provide a context value
// 3. Consume the context value

import React, { Component } from "react";
import ComponentE from "./ComponentE";

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE />
      </div>
    );
  }
}

export default ComponentC;
