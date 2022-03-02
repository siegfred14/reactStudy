import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   this.newMessage = this.newMessage.bind(this)
    }

    // newMessage() {
    //     this.setState({
    //         message : 'Goodbye'
    //     })
    //     console.log(this)
    // }

    newMessage = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    // This keyword is undefine in JS, that is why event binding is required
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.newMessage}>Click</button> */}
        
        {/* To bind, this becomes (approach 1) */}
        {/* <button onClick={this.newMessage.bind(this)}>Click</button> */}

        {/* 2nd approach is - using arrow functions in the render method */}
        {/* <button onClick={() => this.newMessage()}>Click</button> */}
        {/* similar to the first, this approach may also have performance issues */}

        {/* 3rd approach is to bind the event handler in the constuctor as opposed to in the render method */}
        {/* then we call our event without the parentheses */}
        {/* this is the most acceptable method, as listed in the react documentation */}
        <button onClick={this.newMessage}>Click</button>

        {/* Method 4. using an arrow function as a class property. Go UP */}
      </div>
    )
  }
}

export default EventBind