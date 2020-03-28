import React, { useState } from "react"

import "./styles/body.css"

import DataLoader from "./services/DataLoader";
import Body from "./Body"

const max_film_block_value = 5;

const FilmDownload = () => {

    let films = [];

    let film = DataLoader.getData('http://192.168.100.4:8080/films')

    if (film) {
        film.entity.map(function (entity) {
            films.push(entity);
        });
        return films;
    }

}

const filmGroupsBuild = (array, max_values_in_group) => {

    let groups = [];
    let group = [];

    let counter = 0

    for (let i = 0; i < array.length; i++) {
        group[counter] = array[i]
        counter++;
        if (group.length === max_values_in_group) {
            groups.push(group)
            group = []
            counter = 0;
        } else if (i + 1 === array.length) {
            groups.push(group)
        }
    }

    return groups

}

const Page = () => {

    const [pageNumber, setPageNumber] = useState(1)
    let pages = []
    let groups
    let films = FilmDownload();

    if (films) {
        groups = filmGroupsBuild(films, max_film_block_value)
        for (let i = 0; i < Math.ceil(films.length / max_film_block_value); i++) {
            pages[i] = <Body value={groups[i]} />
        }

    }
    const next = () => {
        if (pageNumber && pageNumber !== groups.length) {
            setPageNumber(pageNumber + 1)
        }
    }

    const back = () => {
        if (pageNumber && pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }

    const buttons = <div className="navigateBtn"><div className="btnBack"><button className="btnLeft" onClick={back}>назад</button></div><div className="pageNumber"><div className="btnCenter">{pageNumber}</div></div><div className="btnNext"><button className="btnRight" onClick={next}>вперёд</button></div></div>

    return <><a href='#headerAnchor'><button className="topLowBtn" ><div className="content"><div className="topBtnContenet"></div></div></button></a><div className="body">{pages[pageNumber - 1]}{buttons}</div></>

}

export default Page