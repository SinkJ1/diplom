import React, { useState } from "react"

import AutorizedUserButtonWindow from "./AutorizedUserButtonWindow"
import "./styles/header.css"

const AutorizedUserButton = () => {

    let isOpen = false;

    const change = () => {
        if (isOpen) {
            setState(button)
            isOpen = false;
        } else {
            setState(<>{button}{<AutorizedUserButtonWindow />}</>)
            isOpen = true;
        }
    }

    const button = <div className="header_menu_buttons_autorize" ><button className="header_menu_buttons_autorize_button" onClick={change}></button></div>

    const [state, setState] = useState(button);

    return state;

}

export default AutorizedUserButton