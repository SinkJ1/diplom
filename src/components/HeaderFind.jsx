import React from "react"
import "./styles/header.css";
import "./styles/HeaderFind.css"
import FilmBlock from "../components/FilmBlock"
import { useState } from "react";
import { get } from "./services/DataLoader"
import { Link } from "react-router-dom";

const HeaderFind = () => {

    const [visible, setVisible] = useState("hidden");
    const [text, setText] = useState("");
    let filmBlocks = [];
    const [films, setFilms] = useState();
  
    const change = (e) => {
        setText(e.target.value);
        if (text.length > 1) {
          find(text)
          setVisible("visible")
        } else if (text.length <= 1) {
          setVisible("hidden")
          setFilms()
        }
      }
    
      const find = (text) => {
        if (!films) {
          let filmsArray = []
          let film1 = get(`http://localhost:8080/films/shortName/${text}`, (film) => {
            if (film) {
              film.map(function (entity) {
                filmsArray.push(entity);
              });
            }
            setFilms(filmsArray)
          });
        }
      }
    
      const [name, setName] = useState("")
    
      if (films) {
        for (let i = 0; i < films.length; i++) {
          filmBlocks.push(
            <Link key={i} className="film_block_link" to={`/film/${films[i].filmName}`} onClick={()=>{setText("");setVisible("hidden")}}>
              <FilmBlock id={i} key={i} name={films[i].filmName} description={films[i].filmInformation} imgPath={films[i].imgPath}/>
              </Link>
          )
        }
      }
      let blocks = "";
    
      if (filmBlocks.length > 0) {
        blocks = <><div className="findList123" style={{ visibility: visible,overflow:"auto" }}>
          {filmBlocks}
        </div></>
      }
    
      return <>
      <form className="header_find_block">
     
          <input type="text" className="header_find_input" value={text} onChange={change} required></input>
          {blocks}
          {name}
    
           </form>
        
        </>

}

export default HeaderFind