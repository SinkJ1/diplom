import React, { useState, useEffect } from "react"
import Page from "./components/Page";

import DataLoader from "./components/services/DataLoader";

const FilmPageByCountry = (props) => {
    const [name, setName] = useState(props.value);
    const [filmBlock, setFilmBlock] = useState("");

    const FilmDownload = (url) => {

        let films = [];

        let film = DataLoader.getData(url)

        if (film) {
            film.entity.films.map(function (entity) {
                films.push(entity.film);
            });
            return films;
        }

    }

    useEffect(() => {
        setName(props.value)
    })

    return (<><div style={{ fontSize: "40px", position: "absolute", marginTop: "5%", marginLeft: "40%" }}>Фильмы снятые в: {name}</div><Page value={FilmDownload(`http://192.168.100.4:8080/countries/${name}`)} /></>);

}

export default FilmPageByCountry