import React, { useState } from "react"
import "./styles/window.css"
import Registration from "./Registration"
const Window = () => {

    const [state, setState] = useState(<Login />);

    const onChangeState = (value) => {
        setState(value);
    }

    return (
        <>
        
        <div id="container">
            <button id="reg" onClick={() => onChangeState(<Registration />)}>Registration</button>
        {state}
        </div>
    </>);   
}

export default Window