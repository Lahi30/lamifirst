import React from 'react'

const  Welcome = () => {
   
       // return( <div>
            //<h1>Welcome to My App </h1>
            //</div>); WithOut jsx
   
     //WithJSX
return React.createElement("div", null, React.createElement("h1",null,"Welcome to My APP"))
    
}
 
export default Welcome;