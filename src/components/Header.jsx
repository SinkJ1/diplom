import React from 'react'
import "./styles/header.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import HeaderFind from './HeaderFind';
import DataLoader from "./services/DataLoader";
import Spinner from 'react-bootstrap/Spinner'

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

     const Download = (url) => {

        let films = [];

        let film = DataLoader.getData(url)
        if (film) {
            film.entity.map(function (entity) {
                console.log(entity.name)
                films.push(entity.name);
            });
            return films;
        }

    }

    let countriesFromServer = FilmDownload('http://192.168.100.4:8080/countries/all')
    let genresFromServer = FilmDownload('http://192.168.100.4:8080/genres')
    let data = <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>

    if(countriesFromServer && genresFromServer){
        let counter = 0;
        data = <><div className="header">
        <div className="header_logo">
            <Link key="l" className="film_block_link" to={`/`}>
                <img src={logo} alt="LOGO"></img>
            </Link>
        </div>
        <div className="header_menu">
            <div className="header_menu_genre"><button className="header_menu_genre_button" key="genre">ЖАНР<div className="country_content"><div className="countries">{genresFromServer.map((genre) => <Link className="countryNameLink" key={genre} to={`/filmsByGenre/${genre}`}>{genre}</Link>)}</div></div></button></div>
            <div className="header_menu_tops"><Link to="/bestsFilms" className="header_menu_tops_button">ЛУЧШЕЕ<div className="genre_content"></div></Link></div>
            <div className="header_menu_country"><button className="header_menu_country_button" key="country">СТРАНА<div className="country_content"><div className="countries">{countriesFromServer.map((country) => <Link className="countryNameLink" key={country} to={`/filmByCountry/${country}`}>{country}</Link>)}</div></div></button></div>
            <div className="header_menu_news"><Link to="/newsFilms" className="header_menu_news_button">СКОРО...<div className="genre_content"></div></Link></div>
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