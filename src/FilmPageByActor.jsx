import React, { useState } from "react"

import Page from "./components/Page";

import DataLoader from "./components/services/DataLoader";

const FilmPageByActor = (props) => {

    const [name, setName] = useState(props.value);

    const FilmDownload = (url) => {

        let films = [];

        let film = DataLoader.getData(url)

        if (film) {
            film.entity.actors.map(function (entity) {
                films.push(entity.film);
            });
            return films;
        }

    }

    return (<><div style={{ fontSize: "40px", position: "absolute", marginTop: "5%", marginLeft: "40%" }}>Фильмы созданные с участием: {name}</div><Page value={FilmDownload(`http://192.168.100.4:8080/users/${props.value}`)} /></>);


}

export default FilmPageByActor