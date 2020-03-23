import React from 'react'
import "./styles/header.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import HeaderFind from './HeaderFind';

const Header = (props) => {

    return (<div className="header">
        <div className="header_logo">
            <Link key="l" className="film_block_link" to={`/`}>
                <img src={logo} alt="LOGO"></img>
            </Link>
        </div>
        <div className="header_menu">
            <div className="header_menu_genre"><button className="header_menu_genre_button">ЖАНР<div className="genre_content"><button className="testBtn">Комедия</button><button className="testBtn">Ужасы</button><button className="testBtn">Триллер</button></div></button></div>
            <div className="header_menu_tops"><button className="header_menu_tops_button">ЛУЧШЕЕ<div className="genre_content"></div></button></div>
            <div className="header_menu_country"><button className="header_menu_country_button">СТРАНА<div className="genre_content"></div></button></div>
            <div className="header_menu_news"><button className="header_menu_news_button">НОВИНКИ<div className="genre_content"></div></button></div>
        </div>
        <div className="header_find">
            <HeaderFind />
        </div>
        <div className="header_menu_buttons">
            {props.value}
        </div>
    </div>);
}

export default Header