import React, { useState } from 'react'
import "./styles/header.css"
import Window from './Window';
import HeaderMenu from './HeaderMenu';


const Header = () =>{
    
    const [state, setState] = useState();
      
    const o = () => {
      setState(<Window />);
    }
    
    const a = () => {
      setState();
    }
    
    return (<div id="header">
        <div className="logo">LOGO</div>
        <HeaderMenu />
        <button className="buttonIn" onClick={o}> Вход </button>
        <input type="text"className="findPlace"/>
        <button className="buttonReg" onClick={a}> Регистрация </button>
    {state}
    </div>);
}

export default Header