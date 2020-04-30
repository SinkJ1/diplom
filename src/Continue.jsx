import React,{useState} from "react"

import Page from "./components/Page";

import { get } from "./components/services/DataLoader";

const Continue = () => {

    const FilmDownload = (url) => {
        let filmsArray = []
        let film = get(url, (film) => {
            film.watch.map(function(entity){
                filmsArray.push(entity.film)
            })
            setFilms(filmsArray)
        });
    }



    const [films, setFilms] = useState()


    if (!films) {
        FilmDownload(`http://localhost:8080/users/watchingFilm/user/`)
    }


    return (<><div style={{ fontSize: "40px", position: "absolute", marginTop: "5%", marginLeft: "40%" }}>Продолжить </div><Page value={films} /></>);

}

export default Continue