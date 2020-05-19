import React from "react"

import NotAutoriziedUserButtonHeader from './NotAuoriziedUserButtonHeader'
import AutorizedUserButton from "./AutoriziedUserButtonHeader"

const State = () => {

        if (localStorage.getItem("user")) {
                return <AutorizedUserButton />
        } else {
                return <NotAutoriziedUserButtonHeader />
        }

}

export default State