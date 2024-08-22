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
import React, { useState } from 'react';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameInput}, Age: ${ageInput}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your age"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
        />
        <button type="submit" disabled={!nameInput || !ageInput}>
          Submit
        </button>
      </form>
      <p>Name: {nameInput}</p>
      <p>Age: {ageInput}</p>
    </div>
  );
}

export default App;


