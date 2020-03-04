import React from "react"

import Login from "./Login"
import BodyAutorizeMenuRegistration from "./BodyAutorizeMenuRegistration"

const BodyAutorizeMenu = (props) => {

    if (props.value === "Autorize") {
        return <Login/>;
    } else {
        return <BodyAutorizeMenuRegistration/>;
    }


}

export default BodyAutorizeMenu