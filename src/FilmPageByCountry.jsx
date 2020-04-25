import React, { useState, useEffect } from "react"
import Page from "./components/Page";

import { get } from "./components/services/DataLoader";

const FilmPageByCountry = (props) => {
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
    
    if(name !== props.value){
        setName(props.value)
    }

    if(!films){
        FilmDownload(`http://localhost:8080/countries/${props.value}`)
    }

    return (<><div style={{ fontSize: "40px", position: "absolute", marginTop: "5%", marginLeft: "40%" }}>Фильмы снятые в: {name}</div><Page value={films} /></>);

}

export default FilmPageByCountry