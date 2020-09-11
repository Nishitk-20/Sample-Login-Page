import React from "react";
import Input from "./Input";

function register(){
    return (
        <form  className="form">
            <Input t="text" p="Username"/>        
            <Input t="password" p="Password" />
            <Input t="password" p="Confirm Password" />
            <button type="submit">Register</button>
        </form>);
}

export default register;