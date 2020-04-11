import React from 'react'
import "./styles/header.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import HeaderFind from './HeaderFind';
import DataLoader from "./services/DataLoader";

const Header = (props) => {

    const FilmDownload = (url) => {

        let films = [];

        let film = DataLoader.getData(url)

        if (film) {
            film.entity.map(function (entity) {
                films.push(entity.name);
            });
            return films;
        }

    }

    let countriesFromServer = FilmDownload('http://192.168.100.4:8080/countries/all')
    let data = "download..."

    if(countriesFromServer){
        let counter = 0;
        data = <><div className="header">
        <div className="header_logo">
            <Link key="l" className="film_block_link" to={`/`}>
                <img src={logo} alt="LOGO"></img>
            </Link>
        </div>
        <div className="header_menu">
            <div className="header_menu_genre"><button className="header_menu_genre_button">ЖАНР<div className="genre_content"><button className="testBtn">Комедия</button><button className="testBtn">Ужасы</button><button className="testBtn">Триллер</button></div></button></div>
            <div className="header_menu_tops"><Link to="/bestsFilms" className="header_menu_tops_button">ЛУЧШЕЕ<div className="genre_content"></div></Link></div>
            <div className="header_menu_country"><button className="header_menu_country_button">СТРАНА<div className="country_content"><div className="countries">{countriesFromServer.map((country) => <Link className="countryNameLink" key={country} to={`/filmByCountry/${country}`}>{country}</Link>)}</div></div></button></div>
            <div className="header_menu_news"><Link to="/newsFilms" className="header_menu_news_button">НОВИНКИ<div className="genre_content"></div></Link></div>
        </div>
        <div className="header_find">
            <HeaderFind />
        </div>
        <div className="header_menu_buttons">
            {props.value}
        </div>
    </div></>
    }

    return (data);
}

export default Header