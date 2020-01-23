import React from "react"
import "./styles/filmBlock.css"


const FilmBlock = (props) => {

    return (
        <div id ="test" className="filmBlock">
            <div className="film_block_image">
                <img className="film_image" src="https://kinogo.by/uploads/cache/6/1/1/7/6/7/c/3/f/1573515816-336390502-doktor-son-KINOGO_BY-200x300.jpg" alt="film image"></img>
            </div>
            <div className="film_block_text">
                <div className="film_block_text_name">
                    <div className="film_block_text_name_name">{props.value}</div>
                </div>
                <div className="film_block_text_info">
                    <div className="film_block_text_text">Сериал расскажет о неловком шестнадцатилетнем парне по имени Отис (Эйса Баттерфилд).</div>
                </div>
            </div>
        </div>
    );
}

export default FilmBlock