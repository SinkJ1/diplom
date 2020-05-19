import React from "react"

import AutorizedUserButtonWindow from "./AutorizedUserButtonWindow"
import { DropdownButton } from "react-bootstrap"
import "./styles/header.css"

const AutorizedUserButton = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    const button = <div className="header_menu_buttons_autorize" > <DropdownButton id="dropdown-basic-button" title={user.name}>
        <AutorizedUserButtonWindow />
    </DropdownButton></div>

    return button;

}

export default AutorizedUserButton