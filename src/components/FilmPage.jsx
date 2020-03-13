import React from "react"
import "./styles/filmPage.css"
import DataLoader from "./services/DataLoader";

const FilmDownload = (name) => {

   let film = DataLoader.getData(`http://localhost:8080/films/${name}`)

   if (film) {
      return film.entity;
   }

}

const FilmPage = (props) => {

   let film = FilmDownload(props.value);

   let data = "downloading...";

   if (film) {
      { document.title = props.value }
      data = <div className="container">
         <div className="item_film_name">
            {props.value}
         </div>
         <div className="item_film_info">
            <div className="film_logo">
               <img className="image" src={film.imgPath} alt="logo"></img>
            </div>
            <div className="text">{film.filmInformation}</div>
         </div>
         <div className="item_film_info2">
            <div className="raiting" style={{ backgroundColor: "blue" }}><li>рейтинг</li></div>
            <div className="actors" style={{ backgroundColor: "green" }}>актёры</div>
         </div>
         <div className="item_film_facts" style={{ backgroundColor: "gray" }}>facts</div>
         <div className="item_film_player">player</div>
         <div className="item_film_comment">comments
         asdg
              asdg</div>
      </div>;
   }

   return data;
}

export default FilmPage