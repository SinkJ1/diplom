import React from "react"
import Page from "./components/Page"

import DataLoader from "./components/services/DataLoader";

const NewsFilmsPage = () => {

    const FilmDownload = (url) => {

        let films = [];
    
        let film = DataLoader.getData(url)
    
        if (film) {
            film.entity.map(function (entity) {
                console.log(new Date().toLocaleDateString())
                films.push(entity);
            });
            return films;
        }
    
    }

    return <><div style={{ fontSize: "40px", position: "absolute", marginTop: "5%", marginLeft: "40%" }}>Скоро на сайте:</div><Page value={FilmDownload(`http://localhost:8080/films/commingsFilms/${new Date().toLocaleDateString()}`)}/></>
}

export default NewsFilmsPage