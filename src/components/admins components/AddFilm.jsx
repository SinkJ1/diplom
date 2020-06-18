import React, { useState } from "react"
import { Send, get,UPDATE } from "../services/DataLoader"

const AddFilm = (props) => {

  let id;
  let name;
  let logo;
  let player;
  let info;
  let cost;
  let producer;
  let profit;
  let notParseDate = new Date().toLocaleDateString();

  
  let date = notParseDate.split(".")[2] + "-" + notParseDate.split(".")[1] + "-" + notParseDate.split(".")[0];
  let producer1;
  let blocked = false;
  let premium = false;
  let actors1 = [];
  let genres1 = [];
  let countries1 = [];

  if (props.type === "CHANGE") {
    id = props.value.id;
    player = "sdf"
    name = props.value.filmName;
    logo = props.value.imgPath;
    info = props.value.filmInformation;
    cost = props.value.filmCost;
    profit = props.value.filmProfit
    premium = props.value.premiumStatus;
    blocked = props.value.blockToWatch;
    let notParseDate = new Date(props.value.filmReleaseDate).toLocaleDateString(); 
    date = notParseDate.split(".")[2] + "-" + notParseDate.split(".")[1] + "-" + notParseDate.split(".")[0];

    let a = props.value.actors.slice();
    let b = props.value.genres.slice();
    let c = props.value.countries.slice();

    for (let i = 0; i < a.length; i++) {
      if (a.length > 0) {
        actors1.push(a[i].user)
      }
    }
    for (let i = 0; i < b.length; i++) {
      if (b.length > 0) {
        genres1.push(b[i].genre)
      }
    }
    for (let i = 0; i < c.length; i++) {
      if (c.length > 0) {
        countries1.push(c[i].country)
      }
    }
    if(props.value.userId){
      producer1 = props.value.userId.id + "#" + props.value.userId.name
    }
  }


  const [filmId, setFilmId] = useState(id)
  const [filmName, setFilmName] = useState(name)
  const [filmLogo, setFilmLogo] = useState(logo)
  const [filmPlayer, setFilmPlayer] = useState(player)
  const [filmInfo, setFilmInfo] = useState(info)
  const [filmCost, setFilmCost] = useState(cost)
  const [filmProfit, setFilmProfit] = useState(profit)
  const [filmReleaseDate, setFilmReleaseDate] = useState(date)
  const [filmProducer, setFilmProducer] = useState("")
  const [filmProducerNotPicked, setFilmProducerNotPicked] = useState({ value: [], download: false })
  const [filmActors, setFilmActors] = useState({ value: [] })
  const [filmActorsNotPicked, setFilmActorsNotPicked] = useState({ value: [""] })
  const [filmCountries, setFilmCountries] = useState({ value: [] })
  const [filmCountriesNotPicked, setFilmCountriesNotPicked] = useState({ value: [""], download: false })
  const [filmGenres, setFilmGenres] = useState({ value: [] })
  const [filmGenresNotPicked, setFilmGenresNotPicked] = useState({ value: [""], download: false })
  const [filmBlocked, setFilmBlocked] = useState(blocked)
  const [filmPremium, setFilmPremium] = useState(premium)

  let days = []

  for (let i = 1; i < 32; i++) {
    days.push(i);
  }

  if (filmProducerNotPicked.download === false) {
    let filmsArray = []
    let film = get(`http://localhost:8080/users`, (film) => {
      film.map(function (entity) {
        filmsArray.push(entity);
      });
      setFilmActors({ value: actors1 })

      let copy = filmsArray.slice();
      for (let i = 0; i < actors1.length; i++) {
        for (let j = 0; j < copy.length; j++) {
          if (actors1[i].name === copy[j].name) {
            copy.splice(j, 1)
          }
        }
      }
      setFilmActorsNotPicked({ value: copy.slice() })
      setFilmProducerNotPicked({ value: filmsArray, download: true })
      if (producer1){
        setFilmProducer(producer1)
      } else{
        setFilmProducer(filmsArray[0].id + "#" + filmsArray[0].name)
      }
    });
  }



  if (filmCountriesNotPicked.download === false) {
    let filmsArray = []
    let film = get(`http://localhost:8080/countries/all`, (film) => {
      film.map(function (entity) {
        filmsArray.push(entity);
      });
      let copy = filmsArray.slice();
      if (countries1.length > 0) {
        setFilmCountries({ value: countries1 })
      }
      for (let i = 0; i < countries1.length; i++) {
        for (let j = 0; j < copy.length; j++) {
          if (countries1[i].name === copy[j].name) {
            copy.splice(j, 1)
          }
        }
      }

      setFilmCountriesNotPicked({ value: copy, download: true })
    });

  }

  if (filmGenresNotPicked.download === false) {
    let filmsArray = []
    let film = get(`http://localhost:8080/genres/`, (film) => {
      film.map(function (entity) {
        filmsArray.push(entity);
      });

      if (genres1.length > 0) {
        setFilmGenres({ value: genres1 })
      }
      let copy = filmsArray.slice();
    
      for (let i = 0; i < genres1.length; i++) {
        for (let j = 0; j < copy.length; j++) {
          if (genres1[i].name === copy[j].name) {
            copy.splice(j, 1)
          }
        }
      }
      setFilmGenresNotPicked({ value: copy, download: true })
    });

  }


  const deleteItem = (index) => {
    const b = filmActorsNotPicked.value.slice()
    setFilmActorsNotPicked({ value: b.concat(filmActors.value[index]) })
    setFilmActors({ value: filmActors.value.filter((item, i) => i !== index) });
  }

  const deleteItem2 = (index) => {
    const b = filmActors.value.slice()
    setFilmActors({ value: b.concat(filmActorsNotPicked.value[index]) })
    setFilmActorsNotPicked({ value: filmActorsNotPicked.value.filter((item, i) => i !== index) });
  }

  const deleteItem3 = (index) => {
    const b = filmCountries.value.slice()
    setFilmCountries({ value: b.concat(filmCountriesNotPicked.value[index]) })
    setFilmCountriesNotPicked({ value: filmCountriesNotPicked.value.filter((item, i) => i !== index) });
  }

  const deleteItem4 = (index) => {
    const b = filmCountriesNotPicked.value.slice()
    setFilmCountriesNotPicked({ value: b.concat(filmCountries.value[index]) })
    setFilmCountries({ value: filmCountries.value.filter((item, i) => i !== index) });
  }

  const deleteItem5 = (index) => {
    const b = filmGenres.value.slice()
    setFilmGenres({ value: b.concat(filmGenresNotPicked.value[index]) })
    setFilmGenresNotPicked({ value: filmGenresNotPicked.value.filter((item, i) => i !== index) });
  }

  const deleteItem6 = (index) => {
    const b = filmGenresNotPicked.value.slice()
    setFilmGenresNotPicked({ value: b.concat(filmGenres.value[index]) })
    setFilmGenres({ value: filmGenres.value.filter((item, i) => i !== index) });
  }

  let actors = []
  let genres = []
  let countries = []

  for (let i = 0; i < filmActors.value.length; i++) {
    let user = {}
    actors.push(
      user = { user: filmActors.value[i] }
    )
  }

  for (let i = 0; i < filmCountries.value.length; i++) {
    let country = {}
    countries.push(
      country = { country: filmCountries.value[i] }
    )
  }

  for (let i = 0; i < filmGenres.value.length; i++) {
    let genre = {}
    genres.push(
      genre = { genre: filmGenres.value[i] }
    )
  }



  let film = {
    id : filmId,
    filmName: filmName,
    userId: {
      id: parseInt(filmProducer.split("#")[0]),
      name: filmProducer.split("#")[1]
    },
    filmInformation: filmInfo,
    filmReleaseDate: filmReleaseDate.split("-")[2] + "." + filmReleaseDate.split("-")[1] + "." + filmReleaseDate.split("-")[0],
    filmRaiting: 0,
    imgPath: filmLogo,
    filmProfit: filmProfit,
    filmCost: filmCost,
    blockToWatch: filmBlocked,
    premiumStatus: filmPremium,
    actors: actors,
    countries: countries,
    genres: genres
  }
  const clck = (e) => {
    if(props.type === "CHANGE"){
      UPDATE("http://localhost:8080/films/update",film);
      alert("Фильм обновлён")
    } else {
      Send("http://localhost:8080/films/add",film);
      alert("Фильм добавлен")
    }
    e.preventDefault();
  }



  return <form>
    <div className="form-group">
      <label for="exampleFormControlInputId">Id фильма:</label>
      <input type="text" className="form-control" id="exampleFormControlInputId" placeholder="" value={filmId} disabled />
    </div>
    <div className="form-group">
      <label for="exampleFormControlInput1">Название фильма:</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Название" value={filmName} onChange={(e) => setFilmName(e.target.value)} />
    </div>
    <div className="form-group">
      <label for="exampleFormControlInput2">Логотип:</label>
      <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="путь" value={filmLogo} onChange={(e) => setFilmLogo(e.target.value)} />
    </div>
    <div className="form-group">
      <label for="exampleFormControlInput3">Плеер:</label>
      <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="путь" value={filmPlayer} onChange={(e) => setFilmPlayer(e.target.value)} />
    </div>
    <div className="form-group">
      <label for="exampleFormControlTextarea4">Описание фильма</label>
      <textarea className="form-control" id="exampleFormControlTextarea4" rows="3" value={filmInfo} onChange={(e) => setFilmInfo(e.target.value)}></textarea>
    </div>
    <div className="form-group">
      <label for="exampleFormControlInput5">Стоимсоть фильма:</label>
      <input type="number" className="form-control" id="exampleFormControlInput5" placeholder="Стоимость" value={filmCost} onChange={(e) => setFilmCost(e.target.value)} />
    </div>
    <div className="form-group">
      <label for="exampleFormControlInput6">Сборы фильма:</label>
      <input type="number" className="form-control" id="exampleFormControlInput6" placeholder="Сборы" value={filmProfit} onChange={(e) => setFilmProfit(e.target.value)} />
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect2">Дата выпуска</label>
      <div id="exampleFormControlSelect2">
        <input type="date" className="form-control" id="exampleFormControlSelectYear" placeholder="year" value={filmReleaseDate} onChange={(e)=>{setFilmReleaseDate(e.target.value)}}/>
      </div>
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect33">Режиссёр</label>
      <select className="form-control" value={filmProducer} onChange={(e) => { setFilmProducer(e.target.value) }} id="exampleFormControlSelect33" data-live-search="true">
        {filmProducerNotPicked.value.map((item, i) => (<option key={i}>{item.id}{"#"}{item.name}</option>))}
      </select>
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect44">Актёры</label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <select multiple={true} className="form-control" id="exampleFormControlSelect44" data-live-search="true">
          {filmActorsNotPicked.value.map((item, i) => (<option key={i} onClick={() => { deleteItem2(i) }}>{item.name}</option>))}
        </select>
        <select multiple={true} className="form-control" id="exampleFormControlSelect45" data-live-search="true">
          {filmActors.value.map((item, i) => (<option key={i} onClick={() => { deleteItem(i) }}>{item.name}</option>))}
        </select>
      </div>
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect55">Страны</label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <select multiple className="form-control" id="exampleFormControlSelect55">
          {filmCountriesNotPicked.value.map((item, i) => (<option key={i} onClick={() => { deleteItem3(i) }}>{item.name}</option>))}
        </select>
        <select multiple className="form-control" id="exampleFormControlSelect56">
          {filmCountries.value.map((item, i) => (<option key={i} onClick={() => { deleteItem4(i) }}>{item.name}</option>))}
        </select>
      </div>
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect66">Жанры</label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <select multiple className="form-control" id="exampleFormControlSelect66">
          {filmGenresNotPicked.value.map((item, i) => (<option key={i} onClick={() => { deleteItem5(i) }}>{item.name}</option>))}
        </select>
        <select multiple className="form-control" id="exampleFormControlSelect67">
          {filmGenres.value.map((item, i) => (<option key={i} onClick={() => { deleteItem6(i) }}>{item.name}</option>))}
        </select>
      </div>
    </div>
    <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={filmBlocked} onChange={() => setFilmBlocked(!filmBlocked)} />
      <label className="form-check-label" for="exampleCheck1">Блокировать к показу</label>
    </div><div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck2" checked={filmPremium} onChange={() => setFilmPremium(!filmPremium)} />
      <label className="form-check-label" for="exampleCheck2">Доступ по подписке</label>
    </div>
    <button type="submit" className="btn btn-primary" onClick={clck}>{props.btn}</button>
  </form>
}

export default AddFilm