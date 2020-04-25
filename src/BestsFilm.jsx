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
    
    const [url, setUrl] = useState(`http://localhost:8080/films/bestFilms/10`)
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

    const findButtonClick = (e) => {
        e.preventDefault();
        let paramStr = "?"
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
            FilmDownload(paramUrl);
        }
    }
 
    let CriteriesWindow = <><form style={{ width:"80%", marginLeft:"13%"}} onSubmit={findButtonClick}>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Страна:</label>
        <input type="text" class="form-control" id="inputEmail4" value={country} onChange={onCountryChange}/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Год:</label>
        <input type="text" class="form-control" id="inputPassword4" value={year} onChange={onYearChange}/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Режиссёр:</label>
        <input type="text" class="form-control" id="inputPassword4" value={producer} onChange={onProducerChange}/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Актёр:</label>
        <input type="text" class="form-control" id="inputPassword4" value={actor} onChange={onActorChange}/>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" onSubmit={findButtonClick}>Найти</button>
  </form></>

    console.log(DataLoader.getData('http://localhost:8080/films/filmByParametr?year=2012'))

    if(!films){
        FilmDownload(url)
    }

    return <div className="container_best_film">
                <div className="best_film_content">
                    <div className="selectCondition">
                        {CriteriesWindow}
                    </div>
                <div className="films">
                    <Page value={films} />
                </div>
                </div>
        </div>
}

export default BestsFilm