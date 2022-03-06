import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // short circuit operator approach
    // Used if we want to render just one condition. nothing is rendered when it is false
    return this.state.isLoggedIn && <div>Welcome SIegfred</div>;

    // Using the tenary conditional operator approach
    // return this.state.isLoggedIn ? (
    //   <div>Welcome SIegfred</div>
    // ) : (
    //   <div>Welcome GUest</div>
    // );

    //   Type 2 of Element method conditional rendering

    // let message;
    // if (this.state.isLoggedIn){
    //     message = <div>Welcome Siegfred</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //   Type 1 of conditional rendering
    //   if (this.state.isLoggedIn){
    //       return(
    //         <div>
    //             <div>Welcome Siegfred</div>
    //         </div>
    //       )
    //   }else{
    //       return(
    //         <div>
    //             <div>Welcome Guest</div>
    //         </div>
    //       )
    //   }

    // return (
    //   <div>
    //       <div>Welcome Siegfred</div>
    //       <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
