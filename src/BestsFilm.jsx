import React, { useState, useEffect } from "react"
import { get } from "./components/services/DataLoader";
import DataLoader from "./components/services/DataLoader";
import Page from "./components/Page";
import "./components/styles/bestsFilm.css"
import CriteriesWindow from "./components/CriteriesWindow";

const BestsFilm = () => {

    const [country, setCountry] = useState("");
    const [year, setYear] = useState("");
    const [producer, setProducer] = useState("");
    const [actor, setActor] = useState("");
    
    const [url, setUrl] = useState(`http://192.168.100.4:8080/films/bestFilms/10`)
    const FilmDownload = (url) => {
        let films = []
        let film = get(url, (film) => {
            film.map(function (entity) {
                films.push(entity);
            });
            setFilms(films)
        });
    }
    


    const [films, setFilms] = useState()

    const onCountryChange = (e) => {
        setCountry(e.target.value)
    }

    const onYearChange = (e) => {
        setYear(e.target.value)
    }

    const onProducerChange = (e) => {
        setProducer(e.target.value)
    }

    const onActorChange = (e) => {
        setActor(e.target.value)
    }

    const findButtonClick = () => {
        let paramStr = "?123"
        let paramUrl = `http://localhost:8080/films/filmByParametr`
        if (country.length > 0) {
            paramStr = paramStr + `country=${country}`
        }
        if (year.length > 0) {
            if (paramStr.length > 1) {
                paramStr = paramStr + `&`
            }
            paramStr = paramStr + `year=${year}`
        }
        if (producer.length > 0) {
            if (paramStr.length > 1) {
                paramStr = paramStr + `&`
            }
            paramStr = paramStr + `producer=${producer}`
        }
        if (actor.length > 0) {
            if (paramStr.length > 1) {
                paramStr = paramStr + `&`
            }
            paramStr = paramStr + `actor=${actor}`
        }
        if (paramStr.length > 1) {
            paramUrl = paramUrl + paramStr
         //   FilmDownload(`http://localhost:8080/films/year/${year}`);
        }
    }
    console.log(DataLoader.getData('http://localhost:8080/films/filmByParametr?country=usa&year=2010&producer=aldkj'))

    let CriteriesWindow = <><div className="country_area"><label className="left_area">Страна:<input type="text" value={country} onChange={onCountryChange} /></label></div><div className="year_area"><label className="left_area">Год:<input type="text" value={year} onChange={onYearChange} /></label></div><div className="producer_area"><label className="left_area">Режиссёр:<input type="text" value={producer} onChange={onProducerChange} /></label></div><div className="actor_area"><label className="left_area">Актёр:<input className="actor_input" type="text" value={actor} onChange={onActorChange} /></label></div><div className="nothing_area"></div><div className="findButton_area"><button onClick={findButtonClick}>Найти</button></div></>

    //let film = DataLoader.getData('http://localhost:8080/films/filmByParametr?country="usa"&year="2010"&producer="aldkj"&actor="tom hanks"')

    if(!films){
        FilmDownload(url)
    }

    return <div className="container_best_film"><div className="best_film_content"><div className="selectCondition">{CriteriesWindow}</div><div className="films">
        <Page value={films} />
    </div>
    </div>
    </div>
}

export default BestsFilm