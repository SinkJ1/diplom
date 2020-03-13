import React, { useState, useEffect } from "react"
import "./styles/headerMenuAutorize.css"
import Test3 from "./services/Test3";

const patternForLogin = "^([a-z0-9_-]+\\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$";
const titleForMessage = "use pattern in login - UserName@PostServerName.domain"

const Login = () => {

    const [login, setLogin] = useState({ color: '#898787', value: '' });
    const [password, setPassword] = useState('');

    const onLoginChange = (e) => {
        setLogin({ value: e.target.value });
    }


    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const sss = (e) => {
        if (password.length === 5) {
            e.preventDefault();
        }
    }

    return <><form className="header_autorize_menu_body" onSubmit={sss}>
        <div className="menu_body_login">
            <label className="label">
                Login<input className="header_login_input" /*type="email"*/ value={login.value} /*pattern={patternForLogin} */ title={titleForMessage} onChange={onLoginChange} required />
            </label>
        </div>
        <div className="header_body_password">
            <label className="label">Password<input type="password" className="header_password_input" value={password} onChange={onPasswordChange} required />
            </label>
        </div>
        <div className="menu_body_button">
            <button className="body_button">Вход</button>
        </div>
    </form></>
}

export default Login