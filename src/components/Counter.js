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

    // Because calls to setState are Asynchrounous, we will always have the console.log 
    // running after th setState method, hence, the logged message will be
    // 1 less than the UI value.
    // to fix this, we use a call back function for the console.log msg

    // increment(){
    //     this.setState({
    //         count: this.state.count + 1
    //     }, ()=>{
    //         console.log('Call Back Value', this.state.count)
    //     })
    //     console.log(this.state.count)
    // }

    // react may group multiple setState calls into a single update for better performance
    // EG
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    } 

    // Whenever you have to update the state based on the previous state,
    // we need to pass a function as an argument to setState method,
    //  instead of passing in an object  

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>{
        //     console.log('Call Back Value', this.state.count)
        // })
        this.setState((prevState) =>({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
        
        // OR
        // this.setState((prevState, props) =>({
        //     count: prevState.count + props.addValue
        // }))
        // console.log(this.state.count)
        // if there is another parameter
    }

  render() {
    return (
      <div>
          <div>Count - {this.state.count}</div>
          <button onClick={()=> this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter