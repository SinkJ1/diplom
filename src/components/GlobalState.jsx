import React, { useState } from "react"

const State = (props) =>{

const [state, setState] = useState("/");

if(props.value && props.value !== state){
    setState(props.value);
}
return state;

}

export default State