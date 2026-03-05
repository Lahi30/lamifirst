import React, { Component } from 'react'



class Event_class extends Component {

 Handler()  {
 
   return(
      alert("thanks")
   )
  
}

  render() {
    return (
      <div>
        <button onClick={this.Handler}>Check</button>
      </div>
    )
  }
}
export default Event_class

