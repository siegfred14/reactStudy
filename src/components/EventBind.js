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
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
        <button onClick={()=> this.newMessage()}>Click</button>
      </div>
    )
  }
}

export default EventBind