import React from "react"
import "./styles/filmPage.css"

const FilmPage = (props) => {
    return (<div className="container">
                <div className="item_film_name">
                    Film - {props.value}
                 </div>
                 <div className="item_film_info">
                     <div className="image"></div>
                     <div className="text"></div>
                 </div>
            </div>);
}

export default FilmPage