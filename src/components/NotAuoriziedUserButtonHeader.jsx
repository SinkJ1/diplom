import React, {useState} from "react"
import "./styles/header.css"
import Window from './Window';

const Buttons = () => {
    const [state, setState] = useState();
      
    const open = () => {
      setState(alert());
    }
    
    const close = () => {
      setState();
    }
    
    return (<>
              <div className="header_menu_buttons_In"><button className="header_menu_buttons_In_Button" onClick={open}>ВХОД</button></div>
              <div className="header_menu_buttons_Reg"><button className="header_menu_buttons_Reg_Button" onClick={close}>РЕГИСТРАЦИЯ</button></div>
              {state}
            </>);
}

export default Buttons