import React from "react";
import Input from "./Input"

function login(){
    return(
    <form className="form">
        <Input t="text" p="Username"/>        
        <Input t="password" p="Password" />
        <button type="submit">Login</button>
      </form>);}

export default login;