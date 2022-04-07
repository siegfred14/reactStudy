import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

export class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}

// ComponentE.contextType = UserContext;

export default ComponentE;

// If your application supports the public class field Syntax, you can replace
// ComponentE.contextType = UserContext;
// with
// static contextType = UserContext;  (Before the render method)
