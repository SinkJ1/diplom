import React from 'react'
import "./styles/header.css";
import HeaderMenu from './HeaderMenu';


const Header = (props) =>{
    
    
    
    return (<div id="header">
        <div className="logo">LOGO</div>
        <HeaderMenu />
        {props.value}
        <input type="text"className="findPlace"/>
    </div>);
}

export default Header