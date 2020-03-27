import React from "react"
import "./styles/filmBlock.css"

const FilmBlock = (props) => {

    return (
        <div className="filmBlock">
            <div className="film_block_info">
                <div className="film_block_content">Информация о фильме:
                <li>Актёры</li>
                </div>
                <div className="film_block_image">
                    <img className="film_image" src={props.imgPath} alt="filmImage"></img>
                </div>
                <div className="film_block_text">
                    <div className="film_block_text_name">
                        <div className="film_block_text_name_name">{props.name}</div>
                    </div>
                    <div className="film_block_text_info">
                        <div className="film_block_text_text">{props.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmBlock