import React from "react"
import "./styles/body.css"
import FilmBlock from "./FilmBlock";
import { Link } from "react-router-dom";

const Body = () => {

    let filmBlocks = [];

    for (let i = 0; i < 5; i++){
        filmBlocks.push(
        <Link key={i} className="film_block_link" to={`/film/${i}`}>
            <FilmBlock id={i} key={i} value="Film name" />
        </Link>
        )
    }

return (<div id="body">{filmBlocks}</div>);
}
 
export default Body