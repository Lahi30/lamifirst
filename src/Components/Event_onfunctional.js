import React from 'react'

function Handler(){

//console.log("Clicked thank you!!")
alert("Clicked thank you")

}

function Event_fun() {



  return (
    <div>
      <button onClick={Handler}>Click Me</button>
    </div>
  )
}

export default Event_fun
