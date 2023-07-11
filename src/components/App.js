
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [val,setval] = useState("");

  function print(e){
    return setval(e.target.value);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label> <br/>
        <input type="text" value={val} onChange={print} />
        <p>{"Hello " + val + "!"}</p>
    </div>
  )
}

export default App
