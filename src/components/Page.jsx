import React, { useState } from "react"

import "./styles/body.css"

import DataLoader from "./services/DataLoader";
import Body from "./Body"

const max_film_block_value = 5;

const FilmDownload = (url) => {

    let films = [];

    let film = DataLoader.getData(url)

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

const Page = (props) => {

    const [pageNumber, setPageNumber] = useState(1)
    let pages = []
    let groups
    let films = props.value;
    let pageNumbers = []

    if (films) {
        groups = filmGroupsBuild(films, max_film_block_value)
        for (let i = 0; i < Math.ceil(films.length / max_film_block_value); i++) {
            pages[i] = <Body value={groups[i]} />
        }

    }

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(7)

    const getPageNumbers = () => {
        if (pageNumbers.length > 8) {
            return 0;
        } else {
            return pageNumbers
        }
    }

    const clck = (i) => {
        if (getPageNumbers().length > 6) {

            let center = (left + right) / 2
            if (center < i) {
                setLeft(left + 2)
                setRight(right + 2)
            } else {
                if (i > 1 && left > 1) {
                    setLeft(left - 2)
                    setRight(right - 2)
                }
            }
        }
        setPageNumber(i)
    }

    for (let i = 1; i < pages.length + 1; i++) {
        pageNumbers[i] = <button key={i} onClick={() => { clck(i) }}>{i}</button>
    }


    for (let i = 1; i < pageNumbers.length + 1; i++) {
        if(pageNumbers[i]){

            if(pageNumbers[i].props.children === pageNumber){
                pageNumbers[i] = <button key={i} onClick={() => { clck(i) }} style={{border: "1px solid darkmagenta"}}>{i}</button>
            }
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

    const buttons = <div className="navigateBtn"><div className="btnBack"><button className="btnLeft" onClick={back}>назад</button></div><div className="pageNumber"><div className="btnCenter"><div className="btnNumbers">{getPageNumbers().slice(left, right)}</div>{pageNumber}</div></div><div className="btnNext"><button className="btnRight" onClick={next}>вперёд</button></div></div>

    return <><a href='#headerAnchor'><button className="topLowBtn" ><div className="content"><div className="topBtnContenet"></div></div></button></a><div className="body">{pages[pageNumber - 1]}{buttons}</div></>

}

export default Page