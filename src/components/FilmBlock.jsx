import React from "react"
import "./styles/filmBlock.css"


const FilmBlock = (props) => {

    const onBtnClick = () => {
        props.onClick(props.id)
    }

    return (
        <div className="filmBlock" onClick={onBtnClick}></div>
    );
}

export default FilmBlock