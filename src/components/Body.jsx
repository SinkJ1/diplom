import React from "react"
import "./styles/body.css"
import FilmBlock from "./FilmBlock";

const Body = () => {

    let filmBlocks = [];

    const onBlockClick = (id) => {
        window.location.assign(`/film/${id}`);
    }

    for (let i = 0; i < 5; i++){
        filmBlocks.push(
            <FilmBlock id={i} key={i} onClick={() => {onBlockClick(i)}}/>
        )
    }

return (<div id="body">{filmBlocks}</div>);
}

export default Body