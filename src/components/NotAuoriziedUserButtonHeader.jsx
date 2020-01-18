import React, {useState} from "react"
import "./styles/header.css"
import Window from './Window';

const Buttons = () => {
    const [state, setState] = useState();
      
    const open = () => {
      setState(<Window />);
    }
    
    const close = () => {
      setState();
    }
    return (<div>
    <button className="buttonIn" onClick={open}> Вход </button>
    <button className="buttonReg" onClick={close}> Регистрация </button>
    {state}
</div>);
}

export default Buttons