import React, { useState, useEffect } from "react"
import "./styles/filmPage.css"
import DataLoader from "./services/DataLoader";
import { get, Send } from "./services/DataLoader";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import { subscribeOnFilm } from "../../src/api/user/userService"
import Player from "./Player";
import Comment from "./Comment";
import { rateUpdate } from "../api/film/filmService";

const FilmDownload = (name) => {
   let film = DataLoader.getData(`http://localhost:8080/films/${name}`)

   if (film) {
      return film.entity;
   }

}


const FilmPage = (props) => {

   const defaultLogin = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).login : ""

   const [login, setLogin] = useState(defaultLogin);

   const onLoginChange = (e) => {
      setLogin(e.target.value);
   }

   const submit = (e) => {
      e.preventDefault();
   }

   const [film, setFilm] = useState();
   const [raitingState, setRaitingState] = useState({ rate: 0, download: false })

   const onRateChange = (r) => {
      const nr = {
         id: film.id,
         filmRaiting: r
      }
      rateUpdate(nr);
      setRaitingState({ rate: parseFloat(((r + raitingState.rate) / 2).toFixed(1)), download: true })
   }

   const download = (name) => {
      let films = []
      let film = get(`http://localhost:8080/films/${name}`, (film1) => {
         setFilm(film1)
      });
   }
   const raitingColor = () => {
      if (raitingState.rate <= 1) {
         return '#C00101';
      } else if (raitingState.rate <= 2) {
         return '#dd0505';
      } else if (raitingState.rate <= 3) {
         return '#229B26';
      } else if (raitingState.rate <= 4) {
         return '#36c36e';
      } else if (raitingState.rate <= 5) {
         return '#5fee98';
      }
   }

   let subs = {
      eMail: login,
      film: film
   }



   let data = <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
   </Spinner>;
   if (!film) {
      download(props.value)
   }
   if (film) {
      if (film.filmName !== props.value) {
         download(props.value)
      }
      if (!raitingState.download) {
         setRaitingState({ rate: film.filmRaiting, download: true })
      }
      const subscribe = (e) => {
         let user;
         if (localStorage.getItem("user")) {
            user = {
               id: JSON.parse(localStorage.getItem("user")).id,
               expectedFilms: [
                  {
                     film: {
                        id: film.id

                     }
                  }
               ]
            }
         } else {
            user = {
               //  id: JSON.parse(localStorage.getItem("user")).id,
               expectedFilms: [
                  {
                     film: {
                        id: film.id

                     }
                  }
               ]
            }
         }


         subscribeOnFilm(user)
         e.preventDefault();
      }
      console.log(film)
      let playerAndComment = ""
      { document.title = props.value }
      if (new Date(film.filmReleaseDate).getTime() > new Date().getTime()) {
         playerAndComment = <><div className="modal-dialog" role="document" style={{ marginLeft: "-1%", tabIndex: "-1" }}>
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Уведомить о выходе фильма</h5>
               </div>
               <div className="modal-body">
                  <form onSubmit={submit}>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Адрес электроннгой почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={login} onChange={onLoginChange} />
                     </div>
                     <button type="submit" className="btn btn-primary" onClick={(e) => subscribe(e)}>Уведомить</button>
                  </form>
               </div>
            </div>
         </div></>
      } else {
         playerAndComment = <><div className="item_film_player"><div style={{ marginLeft: "15%" }}><Player value={film.filmName} /></div></div>
            <div className="item_film_comment"><Comment value={film.comments} filmId={film.id}/></div></>
      }

      data = <div className="container-wrapper"><div className="container">
         <div className="item_film_name">
            {props.value}
         </div>
         <div className="item_film_info">
            <div className="film_logo" style={{ alignSelf: "center", textAlign: "center" }}>
               <img className="image" src={film.imgPath} alt="logo"></img>
            </div>
            <div className="text" style={{ borderLeft: "1px solid black" }}>{film.filmInformation}</div>
         </div>
         <div className="item_film_info2">
            <div className="raiting" style={{ borderTop: "1px solid black" }}>
               <div className="star-rating">
                  <div className="star-rating__wrap">
                     <input className="star-rating__input" id="star-rating-5" type="radio" defaultChecked={raitingState.rate === 5} name="rating" value="5" onClick={() => { onRateChange(5) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5" title="5 out of 5 stars"></label>
                     <input className="star-rating__input" id="star-rating-4" type="radio" defaultChecked={raitingState.rate === 4} name="rating" value="4" onClick={() => { onRateChange(4) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-4" title="4 out of 5 stars"></label>
                     <input className="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3" defaultChecked={raitingState.rate === 3} onClick={() => { onRateChange(3) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-3" title="3 out of 5 stars"></label>
                     <input className="star-rating__input" id="star-rating-2" type="radio" name="rating" defaultChecked={raitingState.rate === 2} value="2" onClick={() => { onRateChange(2) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-2" title="2 out of 5 stars"></label>
                     <input className="star-rating__input" id="star-rating-1" type="radio" name="rating" defaultChecked={raitingState.rate === 1} value="1" onClick={() => { onRateChange(1) }} />
                     <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-1" title="1 out of 5 stars"></label>
                  </div>
               </div>
               <p></p>
               <div id="skills">
                  <div className="value">
                     <div className="value-box" style={{ width: ((raitingState.rate * 100) / 5) + "%", backgroundColor: raitingColor() }}></div>
                     <div className="raiting-value" style={{ marginLeft: raitingState.rate === 0 ? 0 : (((raitingState.rate * 100) / 5) - 3.8) + "%" }}>{raitingState.rate}/5</div>
                  </div>
               </div>
            </div>
            <div className="actors" style={{ borderTop: "1px solid black", borderLeft: "1px solid black" }}><b>Актёры:</b>{film.actors.map((user) => <li key={user.user.name}><Link to={`/filmByActor/${user.user.name}`}>{user.user.name}</Link></li>)}</div>
         </div>
         <div className="item_film_facts">
            <div>Страны:{film.countries.map((country) =>
               <li key={country.country.name}>
                  <Link to={`/filmByCountry/${country.country.name}`}>{country.country.name}
                  </Link>
               </li>)}</div>
            <div>
               Бюджет: {film.filmCost} $
            </div>
            <div>
               Сборы: {film.filmProfit} $
            </div>
            <div>
               Дата выхода: {new Date(film.filmReleaseDate).toLocaleDateString()}
            </div>
            <div>
               Жанр: {film.genres.map((value) =>
                  <li key={value.genre.name}>
                     <Link to={`/filmsByGenre/${value.genre.name}`}>{value.genre.name}
                     </Link>
                  </li>)}
            </div>
         </div>
         {playerAndComment}
      </div>
      </div>
   }

   return data;
}

export default FilmPage