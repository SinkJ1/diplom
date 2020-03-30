import React from "react"

import Page from "./components/Page";

import DataLoader from "./components/services/DataLoader";

let name;
const FilmPageByActor = (props) => {

    const FilmDownload = (url) => {

        let films = [];

        let film = DataLoader.getData(url)

        if (film) {
            name = film.entity.name;
            film.entity.actors.map(function (entity) {
                films.push(entity.film);
            });
            return films;
        }

    }

    return (<><div style={{ fontSize: "40px", position: "absolute", marginTop: "5%", marginLeft: "40%" }}>Фильмы созданные с участием: {name}</div><Page value={FilmDownload(`http://192.168.100.4:8080/users/${props.value}`)} /></>);


}

export default FilmPageByActor