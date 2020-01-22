import React from 'react'
import "./styles/header.css";
import HeaderMenu from './HeaderMenu';


const Header = (props) =>{
    
    
    
    return (<div className="header">
                <div className="header_logo">
                    <image alt="LOGO"></image>
                </div>
                <div className="header_menu"></div>
            </div>);
}

export default Header