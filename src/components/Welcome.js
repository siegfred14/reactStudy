import React, { Component } from 'react'

// Class components - this is simply an ES6 component
/*  for a class to become a react component, there are two steps
1.) the class must extend Component
2.) the class must implement a render method which returns null or some HTML 

*/
class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome;