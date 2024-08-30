import React, { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false); 

  const backgroundColor = isOn ? 'white' : 'darkgray'; 
  const btnText = isOn ? 'Turn Off' : 'Turn On'; 
  function startFunction() {
    setIsOn(!isOn); 
  }

  return (
    <div style={{ backgroundColor, display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={startFunction}>{btnText}</button>
    </div>
  );
}

export default App;

hellow i want that something from you bro i trust you 


