import React from "react"
import "./styles/header.css";
import "./styles/HeaderFind.css"
//import FilmBlock from "../components/FilmBlock"
import { useState } from "react";
//import { Link } from "react-router-dom";

const HeaderFind = () => {

    
   /* const findList = () => {
        
        setState(<><form className="header_find_block"><input type="text" className="header_find_input" onClick={findList} /></form><div className="findList"><Link to={`/film/test`}><FilmBlock /></Link></div></>)
    }*/
    const [state,setState] = useState(<form className="header_find_block"><input type="text" className="header_find_input"/><div className="findList"></div></form>)


    return state

}

export default HeaderFind