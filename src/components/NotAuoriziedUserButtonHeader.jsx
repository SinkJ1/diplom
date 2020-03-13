import React, { useState } from "react"
import "./styles/header.css"
import AutorizeMenu from "./AutorizeMenu"

const Buttons = () => {

  const AutorizationMenu = () => {
    setState(<AutorizeMenu value={"Autorize"} />);
  }

  const RegistrationMenu = () => {
    setState(<AutorizeMenu value={"Registration"} />)
  }

  const [state, setState] = useState(<><div className="header_menu_buttons_In"><button className="header_menu_buttons_In_Button" onClick={AutorizationMenu}>ВХОД</button></div>  <div className="header_menu_buttons_Reg"><button className="header_menu_buttons_Reg_Button" onClick={RegistrationMenu}>РЕГИСТРАЦИЯ</button></div></>);


  return state;
}

export default Buttons