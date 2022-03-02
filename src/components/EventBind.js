import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    }

    newMessage() {
        this.setState({
            message : 'Goodbye'
        })
        console.log(this)
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
        <button onClick={() => this.newMessage()}>Click</button>
      </div>
    )
  }
}

export default EventBind