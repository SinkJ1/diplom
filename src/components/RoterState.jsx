import React, { useState } from "react"

const RouterState = (props) => {

    const [state,setState] = useState;

    setState(props.value);

    return state;

}

export default RouterState