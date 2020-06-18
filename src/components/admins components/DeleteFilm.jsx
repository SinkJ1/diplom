import React, { useState } from "react"
import "../admin styles/changeFilm.css"
import { send, get } from "../services/DataLoader"
import DataLoader from "../services/DataLoader"
import { Link } from "react-router-dom"
import FilmBlock from "../FilmBlock"
import AddFilm from "./AddFilm"
import { DELETE } from "../services/DataLoader"


const DeleteFilm = () => {

    const [visible, setVisible] = useState("hidden");
    const [text, setText] = useState("");
    let filmBlocks = [];
    const [films, setFilms] = useState();

    const change = (e) => {
        setText(e.target.value);
        if (text.length > 1) {
            find(text)
            setVisible("visible")
        } else if (text.length <= 1) {
            setVisible("hidden")
            setFilms()
        }
    }

    const find = (text) => {
        if (!films) {
            let filmsArray = []
            let film1 = get(`http://localhost:8080/films/shortName/${text}`, (film) => {
                if (film) {
                    film.map(function (entity) {
                        filmsArray.push(entity);
                    });
                }
                setFilms(filmsArray)
            });
        }
    }

    const [name, setName] = useState("")
    const [downloadFilm,setDownloadFilm] = useState();

    const clck = (name) => {
        let filmsArray = []
        let film = get(`http://localhost:8080/films/${name}`, (film) => {
            setName(<FilmBlock id={film.id} key={film.id} name={film.filmName} description={film.filmInformation} imgPath={film.imgPath} onClick={() => clck(film.filmName)} />)
            setDownloadFilm(film)
        });

        setVisible("hidden")
        setText("")
    }

    if (films) {
        for (let i = 0; i < films.length; i++) {
            filmBlocks.push(
                <FilmBlock id={i} key={i} name={films[i].filmName} description={films[i].filmInformation} imgPath={films[i].imgPath} onClick={() => clck(films[i].filmName)} />
            )
        }
    }
    let blocks = "";

    if (filmBlocks.length > 0) {
        blocks = <><div className="test" className="test" style={{ visibility: visible }}>
            {filmBlocks}
        </div></>
    }

    const clck2 = (e) =>{
        DELETE('http://localhost:8080/films/delete',downloadFilm)
        alert("Фильм удалён")
        e.preventDefault();
    }

    return <>
        <form>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <div>
                        <label for="validationTooltip01">Название фильма</label>
                        <input type="text" className="form-control" id="validationTooltip01" value={text} onChange={change} required></input>
                        {blocks}
                        {name}
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={clck2}>Удалить</button>
        </form>
    </>
}

export default DeleteFilm