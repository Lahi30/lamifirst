import React, { Component } from 'react'

class Sub extends Component {
    constructor() {
      super()
    
      this.state = {
         channel:"This is Lahi Show Channel"
      }
    }
    changeMessage(){
       this.setState({channel:"Thanks for subscribing us"})
           
       }

  render() {
    return (
      <div>
        <h1>{this.state.channel}</h1>
        <button onClick={() =>this.changeMessage()}>Subscribe</button>
      </div>
      )   
  }
}
export default Sub;
 