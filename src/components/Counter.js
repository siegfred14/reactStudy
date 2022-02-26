import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    // increment(){
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log(this.state.count)
    // }

    // Because React is Asynchrounous, we will always have the console.log 
    // running after th setState method, hence, the logged message will be
    // 1 less than the UI value.
    // to fix this, we use a call back function for the console.log msg

    increment(){
        this.setState({
            count: this.state.count + 1
        }, ()=>{
            console.log('Call Back Value', this.state.count)
        })
        console.log(this.state.count)
    }

  render() {
    return (
      <div>
          <div>Count - {this.state.count}</div>
          <button onClick={()=> this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter