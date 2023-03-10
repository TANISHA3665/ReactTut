import React from "react";
import Message from "./Message";
import Person from "./Person";

// function Greeting(){
//     return <h2>Hello world!!!</h2>
// }

// const Greeting = () => {
//     return <h2>Hello world!!!</h2>
// }

// const Greeting = () => {
//     return React.createElement('h2', {}, 'Hello world!!!');
// };


// function Greeting(){
//     return (
//         <div>
//             <h2>Hello world</h2>
//         </div>
//     );
// }

// const Greeting = () => {
//     return(
//         <div>
//             <h2>Hello world</h2>
//         </div>
//     );
// };

// const Greeting = () => {
//     return React.createElement('div',
//      {},
//       React.createElement('h2', {}, 'Hello world')
//     );  
// };

// const Greeting = () => {
//     return <div className="somevalue">hello world</div>  
// };

const Greeting = () => {
  return (
    <div>
      <Person/>
      <Message/>
    </div>
  )
}

export default Greeting
