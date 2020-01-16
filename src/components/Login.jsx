import React, { useState } from "react";
import "./styles/login.css";

const patternForLogin = "^([a-z0-9_-]+\\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$";
const titleForMessage = "use pattern in login - UserName@PostServerName.domain"

const Login = () => {

    const [login,setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onLoginChange = (e) =>{
        setLogin(e.target.value);
    }

    const onPasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    return (<form id="form">
        <label id ="lable">
            Login :
            <input type="email"  value={login} pattern={patternForLogin} title={titleForMessage} onChange={onLoginChange} required/>   
        </label>
        <label>
            Password :
            <input type="password" value={password} onChange={onPasswordChange} required/>
        </label>
        <input type="submit" id="submit" value="LogIn"/>
  </form>);
  }



export default Login;