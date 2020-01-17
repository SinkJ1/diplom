import React from "react"
import "./styles/headerMenu.css"

const HeaderMenu = () => {

    return (<div className="menu">
        <button className="genre">ЖАНРЫ</button>
        <button className="top">ТОП</button>
        <button className="news">НОВИНКИ</button>
        <button className="country">СТРАНЫ</button>
    </div>);
}

export default HeaderMenu