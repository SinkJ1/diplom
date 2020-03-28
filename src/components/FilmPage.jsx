import React, { useState } from "react"
import "./styles/filmPage.css"
import DataLoader from "./services/DataLoader";

const FilmDownload = (name) => {
   let film = DataLoader.getData(`http://192.168.100.4:8080/films/${name}`)

   if (film) {
      return film.entity;
   }

}


const FilmPage = (props) => {

   const [raitingState, setRaitingState] = useState(3.5)
   let film = FilmDownload(props.value);

   const raitingColor = () => {
      if (raitingState <= 1) {
         return '#C00101';
      } else if (raitingState <= 2) {
         return '#dd0505';
      } else if (raitingState <= 3) {
         return '#229B26';
      } else if (raitingState <= 4) {
         return '#36c36e';
      } else if (raitingState <= 5) {
         return '#5fee98';
      }
   }

   let data = "downloading...";
   if (film) {
      { document.title = props.value }
      console.log(film)
      data = <div className="container-wrapper"><div className="container">
         <div className="item_film_name">
            {props.value}
         </div>
         <div className="item_film_info">
            <div className="film_logo">
               <img className="image" src={film.imgPath} alt="logo"></img>
            </div>
            <div className="text" style={{borderLeft:"1px solid black"}}>{film.filmInformation}</div>
         </div>
         <div className="item_film_info2">
            <div className="raiting" style={{borderTop:"1px solid black"}}>
               <div className="star-rating">
                  <div className="star-rating__wrap">
                     <input className="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5" onClick={() => { setRaitingState(5) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5" title="5 out of 5 stars"></label>
                     <input className="star-rating__input" id="star-rating-4" type="radio" defaultChecked={raitingState === 4} name="rating" value="4" onClick={() => { setRaitingState(4) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-4" title="4 out of 5 stars"></label>
                     <input className="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3" onClick={() => { setRaitingState(3) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-3" title="3 out of 5 stars"></label>
                     <input className="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2" onClick={() => { setRaitingState(2) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-2" title="2 out of 5 stars"></label>
                     <input className="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1" onClick={() => { setRaitingState(1) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-1" title="1 out of 5 stars"></label>
                  </div>
               </div>
               <p></p>
               <div id="skills">
                  <div className="value">
                     <div className="value-box" style={{ width: ((raitingState * 100) / 5) + "%", backgroundColor: raitingColor() }}></div>
                     <div className="raiting-value" style={{ marginLeft: raitingState === 0 ? 0 : (((raitingState * 100) / 5) - 3.8) + "%" }}>{raitingState}/5</div>
                  </div>
               </div>
            </div>
            <div className="actors" style={{borderTop:"1px solid black",borderLeft:"1px solid black"}}><b>Актёры:</b></div>
         </div>
         <div className="item_film_facts">facts</div>
         <div className="item_film_player">player</div>
         <div className="item_film_comment">comments
         asdg
              asdg</div>
      </div>
      </div>
   }

   return data;
}

export default FilmPage