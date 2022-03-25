import react from "react";
import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;

// refs make it possible to access DOM nodes in react

// Call back Refs Method
// 1. Create the ref
// 2. Create a method that would asign a DOM element, to the ref we have just created in (1.)
// 3. Attach this ref to the input element
// NB Reaxt will call the ref callback with the DOM element, when the component mounts, and call it with null when it unmounts
// 4. in componentDidMount, check if this.cbRef is not null, then access this.CbRef.focus
