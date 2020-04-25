import React, { useState } from "react"
import { send, get } from "../services/DataLoader"

const AddFilm = (props) => {


  const [filmId,setFilmId] = useState("")
  const [filmName, setFilmName] = useState(props.value)
  const [filmLogo, setFilmLogo] = useState("")
  const [filmPlayer, setFilmPlayer] = useState("")
  const [filmInfo, setFilmInfo] = useState("aewg")
  const [filmCost, setFilmCost] = useState(123)
  const [filmProfit, setFilmProfit] = useState(123)
  const [filmReleaseYear, setFilmReleaseYear] = useState("2000")
  const [filmReleaseMonth, setFilmReleaseMonth] = useState("01")
  const [filmReleaseDay, setFilmReleaseDay] = useState("01")
  const [filmProducer, setFilmProducer] = useState("")
  const [filmProducerNotPicked, setFilmProducerNotPicked] = useState({ value: [], download: false })
  const [filmActors, setFilmActors] = useState({ value: [] })
  const [filmActorsNotPicked, setFilmActorsNotPicked] = useState({ value: ["Саша", "Маня", "Петя", "Коля"] })
  const [filmCountries, setFilmCountries] = useState({ value: [] })
  const [filmCountriesNotPicked, setFilmCountriesNotPicked] = useState({ value: [""], download: false })
  const [filmGenres, setFilmGenres] = useState({ value: [] })
  const [filmGenresNotPicked, setFilmGenresNotPicked] = useState({ value: [""], download: false })
  const [filmBlocked, setFilmBlocked] = useState(false)
  const [filmPremium, setFilmPremium] = useState(false)

  if (filmProducerNotPicked.download === false) {
    let filmsArray = []
    let film = get(`http://localhost:8080/users`, (film) => {
      film.map(function (entity) {
        filmsArray.push(entity);
      });
      setFilmActorsNotPicked({ value: filmsArray })
      setFilmProducerNotPicked({ value: filmsArray, download: true })
      setFilmProducer(filmsArray[0].id + "#" + filmsArray[0].name)
    });

  }

  if (filmCountriesNotPicked.download === false) {
    let filmsArray = []
    let film = get(`http://localhost:8080/countries/all`, (film) => {
      film.map(function (entity) {
        filmsArray.push(entity);
      });
      setFilmCountriesNotPicked({ value: filmsArray, download: true })
    });

  }

  if (filmGenresNotPicked.download === false) {
    let filmsArray = []
    let film = get(`http://localhost:8080/genres/`, (film) => {
      film.map(function (entity) {
        filmsArray.push(entity);
      });
      setFilmGenresNotPicked({ value: filmsArray, download: true })
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

  for(let i = 0; i < filmActors.value.length;i++){
    let user = {}
    actors.push(
      user = { user: filmActors.value[i]}
      )
  }

  for(let i = 0; i < filmCountries.value.length;i++){
    let country = {}
    countries.push(
      country = { country: filmCountries.value[i]}
      )
  }

  for(let i = 0; i < filmGenres.value.length;i++){
    let genre = {}
    genres.push(
      genre = { genre: filmGenres.value[i]}
      )
  }

  let film = {
    id:filmId,
    filmName: filmName,
    userId: {
      id:parseInt(filmProducer.split("#")[0]),
      name:filmProducer.split("#")[1]
    },
    filmInformation: filmInfo,
    filmReleaseDate:filmReleaseDay + "." + filmReleaseMonth + "." + filmReleaseYear,
    filmRaiting: 0,
    imgPath: filmLogo,
    filmProfit: filmProfit,
    filmCost: filmCost,
    blockToWatch : filmBlocked,
    premiumStatus : filmPremium,
    actors : actors,
    countries : countries,
    genres : genres

  }

  const clck = (e) => {
    //props.onClick(film)
    //send("http://localhost:8080/films/add",film);
    console.log(JSON.stringify(film))
    e.preventDefault();
  }



  return <form>
    <div className="form-group">
      <label for="exampleFormControlInputId">Id фильма:</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={filmId} disabled/>
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
      <label for="exampleFormControlInput1">Стоимсоть фильма:</label>
      <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Стоимость" value={filmCost} onChange={(e) => setFilmCost(e.target.value)} />
    </div>
    <div className="form-group">
      <label for="exampleFormControlInput1">Сборы фильма:</label>
      <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Сборы" value={filmProfit} onChange={(e) => setFilmProfit(e.target.value)} />
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect1">Дата выпуска</label>
      <div id="exampleFormControlSelect1">
        <label for="exampleFormControlSelectYear">Год</label>
        <select className="form-control" value={filmReleaseYear} onChange={(e) => setFilmReleaseYear(e.target.value)} id="exampleFormControlSelectYear">
          <option>1999</option>
          <option>2000</option>
          <option>3000</option>
          <option>4000</option>
          <option>5000</option>
        </select>
        <label for="exampleFormControlSelectMonth">Месяц</label>
        <select className="form-control" value={filmReleaseMonth} onChange={(e) => setFilmReleaseMonth(e.target.value)} id="exampleFormControlSelectMonth">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label for="exampleFormControlSelectDay">Число</label>
        <select className="form-control" value={filmReleaseDay} onChange={(e) => setFilmReleaseDay(e.target.value)} id="exampleFormControlSelectDay">
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
        </select>
      </div>
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect1">Режиссёр</label>
      <select className="form-control" value={filmProducer} onChange={(e) => { setFilmProducer(e.target.value) }} id="exampleFormControlSelect2" data-live-search="true">
        {filmProducerNotPicked.value.map((item, i) => (<option key={i}>{item.id}{"#"}{item.name}</option>))}
      </select>
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect2">Актёры</label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <select multiple={true} className="form-control" id="exampleFormControlSelect2" data-live-search="true">
          {filmActorsNotPicked.value.map((item, i) => (<option key={i} onClick={() => { deleteItem2(i) }}>{item.name}</option>))}
        </select>
        <select multiple={true} className="form-control" id="exampleFormControlSelect2" data-live-search="true">
          {filmActors.value.map((item, i) => (<option key={i} onClick={() => { deleteItem(i) }}>{item.name}</option>))}
        </select>
      </div>
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect2">Страны</label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <select multiple className="form-control" id="exampleFormControlSelect2">
          {filmCountriesNotPicked.value.map((item, i) => (<option key={i} onClick={() => { deleteItem3(i) }}>{item.name}</option>))}
        </select>
        <select multiple className="form-control" id="exampleFormControlSelect2">
          {filmCountries.value.map((item, i) => (<option key={i} onClick={() => { deleteItem4(i) }}>{item.name}</option>))}
        </select>
      </div>
    </div>
    <div className="form-group">
      <label for="exampleFormControlSelect2">Жанры</label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <select multiple className="form-control" id="exampleFormControlSelect2">
          {filmGenresNotPicked.value.map((item, i) => (<option key={i} onClick={() => { deleteItem5(i) }}>{item.genreName}</option>))}
        </select>
        <select multiple className="form-control" id="exampleFormControlSelect2">
          {filmGenres.value.map((item, i) => (<option key={i} onClick={() => { deleteItem6(i) }}>{item.genreName}</option>))}
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
    <button type="submit" className="btn btn-primary" onClick={clck}>Добавить</button>
  </form>
}

export default AddFilm