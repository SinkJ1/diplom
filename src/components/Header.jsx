import React, { useState } from 'react'
import "./styles/header.css"
import Window from './Window';


const Header = () =>{
    
    const [state, setState] = useState();
      
    const o = () => {
      setState(<Window />);
    }
    
    const a = () => {
      setState();
    }
    
    return (<div id="header">
        <button className="buttonIn" onClick={o}> Вход </button>
        <input type="text"className="findPlace"/>
        <button className="buttonReg" onClick={a}> Регистрация </button>
    {state}
    </div>);
}

export default Header