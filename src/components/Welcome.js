import React, { Component } from 'react'

// Class components - this is simply an ES6 component
/*  for a class to become a react component, there are two steps
1.) the class must extend Component
2.) the class must implement a render method which returns null or some HTML 

*/
// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }
// IN CLASS COMPONENTS, WE DESTRUCTURE PROPS OR STATE IN THE RENDER METHOD

class Welcome extends Component{
    render(){
        const {name, heroName} = this.props
        return (
            <h1>Welcome {name} a.k.a {heroName}</h1>
        )
    }
}

// Your props object may contain several props but destructure only the ones you need to use
// To destructure several state objects, use
// const {state1, state2} = this.state

export default Welcome;