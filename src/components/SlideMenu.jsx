import React from "react"
import "./styles/slideMenu.css"
import DataLoader from "./services/DataLoader";
import { Link } from "react-router-dom"

const Menu = () => {

    const filmGroupsBuild = (array, max_values_in_group) => {

        let groups = [];
        let group = [];
    
        let counter = 0
    
        for (let i = 0; i < array.length; i++) {
            group[counter] = array[i]
            counter++;
            if (group.length === max_values_in_group) {
                groups.push(group)
                group = []
                counter = 0;
            } else if (i + 1 === array.length) {
                groups.push(group)
            }
        }
    
        return groups
    }

    const FilmDownload = (url) => {

        let films = [];
    
        let film = DataLoader.getData(url)
    
        if (film) {
            film.entity.map(function (entity) {
                films.push(<Link key={entity.filmName} to={`/film/${entity.filmName}`}><img className="imgLinq" src={entity.imgPath} alt="as" /></Link>);
            });
            return films;
        }
    
    }

    let films = FilmDownload("http://192.168.100.4:8080/films/filmImg");
    let imgForCarousel='';
    if(films){
        imgForCarousel = filmGroupsBuild(films,5)
    }


    let arr = [<Link to={`/film/Гарри Поттер`}><img className="imgLinq" src="https://kinogo.by/uploads/posts/2020-02/1582556711_bez-nazvaniya-6.jpg" alt="as" /></Link>, <Link to={`/film/Гарри Поттер`}><img className="imgLinq" src="https://kinogo.by/uploads/posts/2020-02/1582556711_bez-nazvaniya-6.jpg" alt="as" /></Link>, <Link to={`/film/Гарри Поттер`}><img className="imgLinq" src="https://kinogo.by/uploads/posts/2020-02/1582556711_bez-nazvaniya-6.jpg" alt="as" /></Link>, <Link to={`/film/Гарри Поттер`}><img className="imgLinq" src="https://kinogo.by/uploads/posts/2020-02/1582556711_bez-nazvaniya-6.jpg" alt="as" /></Link>, <Link to={`/film/Гарри Поттер`}><img className="imgLinq" src="https://kinogo.by/uploads/posts/2020-02/1582556711_bez-nazvaniya-6.jpg" alt="as" /></Link>]

    return (<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol key="carousel-indicators" className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" style={{backgroundColor:"gray"}} data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" style={{backgroundColor:"gray"}} data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" style={{backgroundColor:"gray"}} data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="d-block w-100"><div className="filmBlockMenu"><div></div><div className="center">{imgForCarousel[0]}</div></div></div>
            </div>
            <div className="carousel-item">
                <div className="d-block w-100"><div className="filmBlockMenu"><div></div><div className="center">{imgForCarousel[1]}</div></div></div>
            </div>
            <div className="carousel-item">
                <div className="d-block w-100"><div className="filmBlockMenu"><div></div><div className="center">{imgForCarousel[2]}</div></div></div>
            </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" ></span>
            <span className="sr-only" >Next</span>
        </a>
    </div>);
}

export default Menu