import React, { useState } from "react";
import "../admin styles/genreWork.css"

import { send, get, UPDATE, DELETE } from "../services/DataLoader"

const GenreWork = (props) => {

    const [genres, setGenres] = useState({ value: [], download: false })
    const [vis, setVis] = useState("hidden")
    const [inputValue, setInputValue] = useState();
    const [selected,setSelected] = useState()
    const [type,setType] = useState();

    if (genres.download === false) {
        let filmsArray = []
        let film = get(props.value, (film) => {
            film.map(function (entity) {
                filmsArray.push(entity);
            });
            setGenres({ value: filmsArray, download: true })
        });
    }

    const add = () => {
        setVis("visible")
        setType("add")

    }

    const change = () => {
        setVis("visible")
        setType("change")
        setInputValue(genres.value[selected].name)
    }

    const remove = () => {
        DELETE(props.del,genres.value[selected])
        setGenres({value:genres.value.filter((item, i) => i !== selected)})
    }

    const sbm = (e) => {
        if(type === "add"){

            let newGenre = {
                name: inputValue
            }
            send(props.add,newGenre);
            //console.log(JSON.stringify(newGenre))
            setGenres({ value: genres.value.concat(newGenre)})
           
        } else if(type === "change"){
            let arr = genres.value.slice()
            arr[selected].name = inputValue
            setGenres({value:arr.slice()})
            UPDATE(props.put,arr[selected])
        }
            setVis("hidden")
            setInputValue("")
            e.preventDefault();
    }

    const otm = () => {
        setInputValue("")
        setVis("hidden")
    }

    return <div className="workWindow">
        <div className="h"><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" onClick={add}>&#10010;</button>
            <button type="button" class="btn btn-secondary"onClick={change}>&#9998;</button>
            <button type="button" className="btn btn-secondary" onClick={remove}>&#10006;</button>
        </div>
        </div>
        <div className="b">
            <div className="form-group">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <select multiple={true} className="form-control" id="exampleFormControlSelect44" data-live-search="true">
                        {genres.value.map((item, i) => (<option key={i} onClick={()=>setSelected(i)}>{item.name}</option>))}
                    </select>
                    <div style={{ position: "absolute", visibility: vis }}>
                        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}  />
                        <button type="submit" onClick={sbm}>&#10004;</button>
                        <button onClick={otm}>&#10008;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default GenreWork