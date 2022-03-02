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
        
        {/* To bind, this becomes */}
        <button onClick={this.newMessage.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBind