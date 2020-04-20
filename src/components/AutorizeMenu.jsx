import React, { useState } from "react"

import "./styles/header.css"
import NotAutorizeUserButtonHeader from "./NotAuoriziedUserButtonHeader"
import AutorizedUserButton from "./AutoriziedUserButtonHeader"
import Login from "./services/Login"

let window=''
const Menu = (props) => {


    if(props.value === "Autorize"){
        window = Login()
    }else{
        window = ''
    }

    return <>{window === true ?<AutorizedUserButton/> : <><NotAutorizeUserButtonHeader />{window}</>}</>

}

export default Menu