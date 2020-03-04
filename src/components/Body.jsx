import React from "react"
import "./styles/body.css"
import FilmBlock from "./FilmBlock";
import { Link } from "react-router-dom";
import DataLoader from "./services/DataLoader";

const FilmDownload = () => {

    let films = [];

    let film = DataLoader.getData('http://localhost:8080/films')

    if (film) {
        film.entity.map(function (entity) {
            films.push(entity);
        });
        return films;
    }


}

const Body = () => {

    let films = FilmDownload();
    let filmsName = [];
    let filmsDescription = [];
    let filmsImgPath = [];
    let filmBlocks = [];

    if (films) {
        for (let i = 0; i < films.length; i++) {
            films.map(function (film, index) {
                if (index === i) {
                    filmsName[i] = film.filmName;
                    filmsDescription[i] = film.filmInformation;
                    filmsImgPath[i] = film.imgPath;
                }
            })
        }
    }

    for (let i = 0; i < 5; i++) {
        filmBlocks.push(
            <Link key={i} className="film_block_link" to={`/film/${filmsName[i]}`}>
                <FilmBlock id={i} key={i} name={filmsName[i]} description={filmsDescription[i]} imgPath={filmsImgPath[i]} />
            </Link>
        )
    }

    return (<div id="body">{filmBlocks}</div>);
}

export default Body