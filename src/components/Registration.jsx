import React, { useState } from "react";
import "./styles/login.css";

const patternForLogin = "^([a-z0-9_-]+\\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$";
const titleForMessage = "use pattern in login - UserName@PostServerName.domain"

const Registration = () =>{
    
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [telNumber, setTelNumber] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onLoginChange = (e) =>{
        setLogin(e.target.value);
    }

    const onPasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    const onTelNumberChange = (e) => {
        setTelNumber(e.target.value);
    }

    return (<form id="form">
         <label id ="lable">
            Login :
            <input type="text"  value={login} onChange={onLoginChange} required/>   
        </label>
        <label id ="lable">
            E-mail :
            <input type="email"  value={email} pattern={patternForLogin} title={titleForMessage} onChange={onEmailChange} required/>   
        </label>
       
        <label id ="lable">
            Number :
            <input type="number"  value={telNumber} onChange={onTelNumberChange} required/>   
        </label>
        <label>
            Password :
            <input type="password" value={password} onChange={onPasswordChange} required/>
        </label>
        <input type="submit" id="submit" value="LogIn"/>
  </form>);
}

export default Registration