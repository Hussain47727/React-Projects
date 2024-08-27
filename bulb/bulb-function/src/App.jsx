// import React, { useState } from "react";

// function App() {
//   const [isOn, setIsOn] = useState(false); 

//   const backgroundColor = isOn ? 'white' : 'darkgray'; 
//   const btnText = isOn ? 'Turn Off' : 'Turn On'; 
//   function startFunction() {
//     setIsOn(!isOn); 
//   }

//   return (
//     <div style={{ backgroundColor, display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
//       <button onClick={startFunction}>{btnText}</button>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Navbar from 'Component'

export default function App() {
  return (
    <div>
      <Navbar title='hello'/>
    </div>
  )
}

