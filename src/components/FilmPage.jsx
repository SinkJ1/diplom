import React, { useState } from "react"
import "./styles/filmPage.css"
import DataLoader from "./services/DataLoader";

const FilmDownload = (name) => {
   let film = DataLoader.getData(`http://localhost:8080/films/${name}`)

   if (film) {
      return film.entity;
   }

}

const FilmPage = (props) => {

   const [raitingState,setRaitingState] = useState(0)
   let film = FilmDownload(props.value);

   const cc = (a) =>{
      alert(a)
   }

   let data = "downloading...";
   let ch = "checked"
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
            <div className="raiting"><div className="star-rating">
               <div className="star-rating__wrap">
                  <input className="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5" onClick={()=>{setRaitingState(5)}}/>
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5" title="5 out of 5 stars"></label>
                  <input className="star-rating__input" id="star-rating-4" type="radio" defaultChecked={raitingState === 4} name="rating" value="4" onClick={()=>{setRaitingState(4)}}/>
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-4" title="4 out of 5 stars"></label>
                  <input className="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3" onClick={()=>{setRaitingState(3)}}/>
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-3" title="3 out of 5 stars"></label>
                  <input className="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2" onClick={()=>{setRaitingState(2)}}/>
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-2" title="2 out of 5 stars"></label>
                  <input className="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1" onClick={()=>{setRaitingState(1)}}/>
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-1" title="1 out of 5 stars"></label>
               </div>
            </div></div>
            <div className="actors" style={{ backgroundColor: "green" }}>актёры</div>
         </div>
         <div className="item_film_facts" style={{ backgroundColor: "gray" }}>facts</div>
         <div className="item_film_player">player</div>
         <div className="item_film_comment">comments
         asdg
              asdg</div>
      </div>;
      console.log(raitingState)
   }

   return data;
}

export default FilmPage