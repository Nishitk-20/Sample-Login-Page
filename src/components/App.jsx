import React from "react";
import Login from "./Login";
import Register from "./Regiser";

var isRegistered = true;

function App() {
  return (
    <div className="container">
      
      {isRegistered === true ? (<Login />):(<Register />)}
  
    </div>
  );
}

export default App;