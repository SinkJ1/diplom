import React from "react"
import "./styles/body.css"
import FilmBlock from "./FilmBlock";
import { Link } from "react-router-dom";

const Body = (props) => {

    document.title = 'CINEMA_yS'

    let films = props.value;
    let filmsName = [];
    let filmsDescription = [];
    let filmsImgPath = [];
    let filmBlocks = [];
    let max_length

    if (films) {

        max_length = films.length >= 5 ? 5 : films.length

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

    for (let i = 0; i < max_length; i++) {
        filmBlocks.push(
            <Link key={i} className="film_block_link" to={`/film/${filmsName[i]}`}>
                <FilmBlock id={i} key={i} name={filmsName[i]} description={filmsDescription[i]} imgPath={filmsImgPath[i]} />
            </Link>
        )
    }

    return (<div className="filmBlocks">{filmBlocks}</div>);
}

export default Body