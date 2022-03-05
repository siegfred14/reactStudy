import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn: false
        }
      }
      
  render() {
    return (
      <div>Welcome Siegfred</div>
    )
  }
}

export default UserGreeting