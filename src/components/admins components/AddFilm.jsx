import React, { useState } from "react"
import { send, get } from "../services/DataLoader"

const AddFilm = () => {


  const [filmName, setFilmName] = useState("aweg")
  const [filmLogo, setFilmLogo] = useState("aweg")
  const [filmPlayer, setFilmPlayer] = useState("aweg")
  const [filmInfo, setFilmInfo] = useState("aewg")
  const [filmCost, setFilmCost] = useState(123)
  const [filmProfit, setFilmProfit] = useState(123)
  const [filmReleaseYear, setFilmReleaseYear] = useState(0)
  const [filmReleaseMonth, setFilmReleaseMonth] = useState(0)
  const [filmReleaseDay, setFilmReleaseDay] = useState(0)
  const [filmProducer, setFilmProducer] = useState({ value:[""]})
  const [filmActors, setFilmActors] = useState({ value: [] })
  const [filmActorsNotPicked, setFilmActorsNotPicked] = useState({ value: ["Саша", "Маня", "Петя", "Коля"] })
  const [filmCountries, setFilmCountries] = useState({ value: [] })
  const [filmCountriesNotPicked, setFilmCountriesNotPicked] = useState({ value: [""] })
  const [filmGenres, setFilmGenres] = useState({ value: [] })
  const [filmGenresNotPicked, setFilmGenresNotPicked] = useState({ value: [""] })
  const [filmBlocked, setFilmBlocked] = useState(false)
  const [filmPremium, setFilmPremium] = useState(false)


  if(filmCountriesNotPicked.value.length <= 1){
      let filmsArray = []
      let film = get(`http://localhost:8080/countries/all`, (film) => {
          film.map(function (entity) {
              filmsArray.push(entity.name);
          });
          setFilmCountriesNotPicked({value:filmsArray})
      });
  
  }

  if(filmGenresNotPicked.value.length <= 1){
    let filmsArray = []
    let film = get(`http://localhost:8080/genres/`, (film) => {
        film.map(function (entity) {
            filmsArray.push(entity.genreName);
        });
        setFilmGenresNotPicked({value:filmsArray})
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

  let prod = {
    name : "John" //filmProducer
  }

  let user = {
    name : "Ben"
  }

  let genre = {
    name : "Комедия"
  }

  let genres = {
    genre
  }

  let act = {
    user
  }

  let film = {
    filmName : filmName,
    userId : prod,
    filmInformation : filmInfo,
    filmReleaseDate : "",
    filmRaiting : 0,
    imgPath : filmLogo,
    filmProfit : filmProfit,
    filmCost : filmCost,
    
  }

  const clck = (e) =>{
    console.log(JSON.stringify(film));
   // send("http://localhost:8080/films/test",film);
    e.preventDefault();
  }



  return <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Название фильма:</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Название" value={filmName} onChange={(e) => setFilmName(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput2">Логотип:</label>
      <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="путь" value={filmLogo} onChange={(e) => setFilmLogo(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput3">Плеер:</label>
      <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="путь" value={filmPlayer} onChange={(e) => setFilmPlayer(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea4">Описание фильма</label>
      <textarea class="form-control" id="exampleFormControlTextarea4" rows="3" value={filmInfo} onChange={(e) => setFilmInfo(e.target.value)}></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Стоимсоть фильма:</label>
      <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Стоимость" value={filmCost} onChange={(e) => setFilmCost(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Сборы фильма:</label>
      <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Сборы" value={filmProfit} onChange={(e) => setFilmProfit(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Дата выпуска</label>
      <div id="exampleFormControlSelect1">
        <label for="exampleFormControlSelectYear">Год</label>
        <select class="form-control" value={filmReleaseYear} onChange={(e) => setFilmReleaseYear(e.target.value)} id="exampleFormControlSelectYear">
          <option>1999</option>
          <option>2000</option>
          <option>3000</option>
          <option>4000</option>
          <option>5000</option>
        </select>
        <label for="exampleFormControlSelectMonth">Месяц</label>
        <select class="form-control" value={filmReleaseMonth} onChange={(e) => setFilmReleaseMonth(e.target.value)} id="exampleFormControlSelectMonth">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label for="exampleFormControlSelectDay">Число</label>
        <select class="form-control" value={filmReleaseDay} onChange={(e) => setFilmReleaseDay(e.target.value)} id="exampleFormControlSelectDay">
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Режиссёр</label>
      <select class="form-control" value={filmProducer} onChange={(e) => setFilmProducer(e.target.value)} id="exampleFormControlSelect2" data-live-search="true">
      {filmProducer.value.map((item, i) => (<option key={i}>{item}</option>))}
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Актёры</label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <select multiple={true} class="form-control" id="exampleFormControlSelect2" data-live-search="true">
          {filmActorsNotPicked.value.map((item, i) => (<option key={i} onClick={() => { deleteItem2(i) }}>{item}</option>))}
        </select>
        <select multiple={true} class="form-control" id="exampleFormControlSelect2" data-live-search="true">
          {filmActors.value.map((item, i) => (<option key={i} onClick={() => { deleteItem(i) }}>{item}</option>))}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Страны</label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          {filmCountriesNotPicked.value.map((item, i) => (<option key={i} onClick={() => { deleteItem3(i) }}>{item}</option>))}
        </select>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          {filmCountries.value.map((item, i) => (<option key={i} onClick={() => { deleteItem4(i) }}>{item}</option>))}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Жанры</label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          {filmGenresNotPicked.value.map((item, i) => (<option key={i} onClick={() => { deleteItem5(i) }}>{item}</option>))}
        </select>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          {filmGenres.value.map((item, i) => (<option key={i} onClick={() => { deleteItem6(i) }}>{item}</option>))}
        </select>
      </div>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" checked={filmBlocked} onChange={() => setFilmBlocked(!filmBlocked)} />
      <label class="form-check-label" for="exampleCheck1">Блокировать к показу</label>
    </div><div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck2" checked={filmPremium} onChange={() => setFilmPremium(!filmPremium)} />
      <label class="form-check-label" for="exampleCheck2">Доступ по подписке</label>
    </div>
    <button type="submit" class="btn btn-primary" onClick={clck}>Добавить</button>
  </form>
}

export default AddFilm