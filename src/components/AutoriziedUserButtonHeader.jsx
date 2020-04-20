import React, { useState } from "react"

import AutorizedUserButtonWindow from "./AutorizedUserButtonWindow"
import { Dropdown, DropdownButton } from "react-bootstrap"
import {Link} from "react-router-dom"
import "./styles/header.css"

const AutorizedUserButton = () => {

    const button = <div className="header_menu_buttons_autorize" > <DropdownButton id="dropdown-basic-button" title={localStorage.getItem('name')}>
        <AutorizedUserButtonWindow/>
    </DropdownButton></div>

    return button;

}

export default AutorizedUserButton