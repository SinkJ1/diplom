import React, { useState } from "react"
import Page from "./components/Page";

import { get } from "./components/services/DataLoader";

const FilmByGenre = (props) => {
    const [name, setName] = useState(props.value);

    const FilmDownload = (url) => {
        let filmsArray = []
        let film = get(url, (film) => {
            film.films.map(function (entity) {
                filmsArray.push(entity.film);
            });
            setFilms(filmsArray)
        });
    }



    const [films, setFilms] = useState()


    if (!films) {
        FilmDownload(`http://localhost:8080/genres/${props.value}`)
    }

    if (name !== props.value) {
        setName(props.value)
        FilmDownload(`http://localhost:8080/genres/${props.value}`)
    }

    return (<><div style={{ fontSize: "40px", position: "absolute", marginTop: "5%", marginLeft: "40%" }}>Фильмы снятые в жанре {name}</div><Page value={films} /></>);

}

export default FilmByGenre