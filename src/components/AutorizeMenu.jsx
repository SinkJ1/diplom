import React, { useState } from "react"

import "./styles/header.css"
import NotAutorizeUserButtonHeader from "./NotAuoriziedUserButtonHeader"
import AutorizedUserButton from "./AutoriziedUserButtonHeader"
import Login from "./services/Login"
import Registration from "./services/Registration"

let window=''
const Menu = (props) => {


    if(props.value === "Autorize"){
        window = Login()
    }else if(props.value === "Registration"){
        window = Registration()
    } else {
        window = ''
    }

    return <>{window === true ?<AutorizedUserButton/> : <><NotAutorizeUserButtonHeader />{window}</>}</>

}

export default Menu