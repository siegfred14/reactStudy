import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

export class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h1>Component E context {this.context}</h1>
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

// Limitations of public class field Syntax
// 1. It only works with class components
// 2. you can only subscribe to a single context, using the contextType
