import React, { Component } from 'react'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Parent'
      }
    }

  render() {
    return (
      <div>ParentComponent</div>
    )
  }
}

export default ParentComponent