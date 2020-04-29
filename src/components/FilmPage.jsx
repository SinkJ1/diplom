import React, { useState,useEffect } from "react"
import "./styles/filmPage.css"
import DataLoader from "./services/DataLoader";
import  { get, send } from "./services/DataLoader";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'

import reducer from './services/Test3';
import Player from "./Player";

const FilmDownload = (name) => {
   let film = DataLoader.getData(`http://localhost:8080/films/${name}`)

   if (film) {
      return film.entity;
   }

}


const FilmPage = (props) => {
   
   
   
   const [login, setLogin] = useState();

   const onLoginChange = (e) => {
      setLogin(e.target.value);
   }
   
   const submit = (e) => {
     
      e.preventDefault();
   }

   const [raitingState, setRaitingState] = useState(2.2)
   const [film,setFilm] = useState();

   const download = (name) => {
      let films = []
      let film = get(`http://localhost:8080/films/${name}`, (film1) => {
          setFilm(film1)
      });
  }
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

   let subs = {
      eMail : login,
      film : film
   }

   const subscribe = (e) =>{
      send(`http://localhost:8080/subscribe/add`,subs)
      e.preventDefault();
   }

   let data = <Spinner animation="border" role="status">
   <span className="sr-only">Loading...</span>
 </Spinner>;
 if(!film){
    download(props.value)
 }
   if (film) {
      if(film.filmName !== props.value){
         download(props.value)
      }
      let playerAndComment = ""
      { document.title = props.value }
      if(new Date(film.filmReleaseDate).getTime() > new Date().getTime()){
         playerAndComment = <><div class="modal-dialog" role="document" style={{marginLeft:"-1%", tabIndex:"-1"}}>
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="staticBackdropLabel">Уведомить о выходе фильма</h5>
           </div>
           <div class="modal-body">
             <form onSubmit={submit}>
               <div class="form-group">
                 <label for="exampleInputEmail1">Адрес электроннгой почты</label>
                 <input type="email" class="form-control" id="exampleInputEmail1" value={login} onChange={onLoginChange}/>
               </div>
               <button type="submit" class="btn btn-primary" onClick={(e)=> subscribe(e)}>Уведомить</button>
             </form>
           </div>
         </div>
       </div></>
      } else {
         playerAndComment = <><div className="item_film_player"><div style={{marginLeft:"15%"}}><Player value={film.filmName}/></div></div>
      <div className="item_film_comment"><div className="commentBody"><div className="userImg">di</div></div></div></>
      }       

      data = <div className="container-wrapper"><div className="container">
         <div className="item_film_name">
            {props.value}
         </div>
         <div className="item_film_info">
            <div className="film_logo" style={{alignSelf:"center",textAlign:"center"}}>
               <img className="image" src={film.imgPath} alt="logo"></img>
            </div>
            <div className="text" style={{ borderLeft: "1px solid black" }}>{film.filmInformation}</div>
         </div>
         <div className="item_film_info2">
            <div className="raiting" style={{ borderTop: "1px solid black" }}>
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
            <div className="actors" style={{ borderTop: "1px solid black", borderLeft: "1px solid black" }}><b>Актёры:</b>{film.actors.map((user) => <li key={user.user.name}><Link to={`/filmByActor/${user.user.name}`}>{user.user.name}</Link></li>)}</div>
         </div>
         <div className="item_film_facts">Страны:{film.countries.map((country) => <li key={country.country.name}><Link to={`/filmByCountry/${country.country.name}`}>{country.country.name}</Link></li>)}</div>
         {playerAndComment}
      </div>
      </div>
   }

   return data;
}

export default FilmPage