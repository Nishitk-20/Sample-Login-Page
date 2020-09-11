import React from "react";
import Input from "./Input";

function form(props){
    return (
        <form  className="form">
            <Input t="text" p="Username"/>        
            <Input t="password" p="Password" />
            {props.isRegistered === false && <Input t="password" p="Confirm Password" />}
            {/* {props.isRegistered === true ? <Input t="password" p="Confirm Password" /> : null} */}
            <button type="submit">{props.isRegistered ?<p>Login</p>:<p>Register</p>}</button>
        </form>);
}

export default form;