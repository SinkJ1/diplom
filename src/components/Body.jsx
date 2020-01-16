import React from "react"
import "./styles/body.css"
import FilmBlock from "./FilmBlock";

const Body = () => {

    let filmBlocks = [];

    for (let i = 0; i < 5; i++){
        filmBlocks.push(
            <FilmBlock id={i} key={i}/>
        )
    }

return (<div id="body">{filmBlocks}</div>);
}

export default Body