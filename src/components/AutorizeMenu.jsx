import React, { useState } from "react"

import "./styles/header.css"
import NotAutorizeUserButtonHeader from "./NotAuoriziedUserButtonHeader"
import AutorizedUserButton from "./AutoriziedUserButtonHeader"
import Login from "./services/Login"

let window=''
const Menu = (props) => {

    const CloseMenu = () => {
        setState(<NotAutorizeUserButtonHeader />)
    }


    if(props.value === "Autorize"){
        window = Login()
    }else{
        window = ''
    }

    const [state, setState] = useState(<><NotAutorizeUserButtonHeader /><div className="regWindow">{window}<div className="closeBtn"><div className="icon"><div className="closeBtnIcon" onClick={CloseMenu} /></div></div></div></>)

    if (window === true) {
        return <AutorizedUserButton/>
    }


    return state

}

export default Menu