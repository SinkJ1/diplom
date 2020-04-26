import React, { useState } from "react";
import "../admin styles/genreWork.css"

import { send, get, UPDATE } from "../services/DataLoader"

const GenreWork = () => {

    const [genres, setGenres] = useState({ value: [], download: false })
    const [vis,setVis] = useState("hidden")
    const [inputValue,setInputValue] = useState();

    if (genres.download === false) {
        let filmsArray = []
        let film = get(`http://localhost:8080/genres/`, (film) => {
            film.map(function (entity) {
                filmsArray.push(entity);
            });
            setGenres({ value: filmsArray, download: true })
        });
    }

    const add = () =>{
        let newGenre = {
            genreName:"sad"
        }
        setVis("vivisble")
        setGenres({value:genres.value.concat(newGenre),download:true})
    }

    const change = () => {

    }

    const remove = () =>{

    }

    return <div className="workWindow">
        <div className="h"><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" onClick={add}>Добавить</button>
            <button type="button" class="btn btn-secondary">Удалить</button>
            <button type="button" class="btn btn-secondary">Изменить</button>
        </div>
        </div>
        <div className="b">
            <div className="form-group">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <select multiple={true} className="form-control" id="exampleFormControlSelect44" data-live-search="true">
                        {genres.value.map((item, i) => (<option key={i} >{item.genreName}</option>))}
                    </select>
                    <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} style={{position:"absolute" ,visibility:vis}} />
                </div>
            </div>
        </div>
    </div>
}

export default GenreWork