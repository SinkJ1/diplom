import React, { useState } from "react"
import "./styles/header.css"

const AutorizedUserButton = () => {

    const[isOpen,setOpen] = useState(false);

    const onClick = () => {
        if(isOpen){
            setWindow({button})
            setOpen(false)
        } else{
            setWindow(<>{button}<div style={{position:"absolute" ,height:"250px",width:"250px", backgroundColor:"red", top:"90px"}}>sdg</div></>)
            setOpen(true)
        }
        console.log(isOpen)
    }

    const button = <div className="header_menu_buttons_autorize"><button className="header_menu_buttons_autorize_button" onClick={onClick}>img</button></div>

    const [window,setWindow] = useState(button);

    return window;

}

export default AutorizedUserButton