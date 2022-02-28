import react, { Component } from "react";

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitor'
        }
    }

    // NB: this.state can only be assigned in the constructor.
    // Anywhere else, it has to be effected with the setState method 
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() { 
        return ( 
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {()=> this.changeMessage()}>Subscribe</button>
            </div>
         );
    }
}
 
export default Message;