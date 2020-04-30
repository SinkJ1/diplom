import React from "react"
import Menu from './components/SlideMenu';
import Page from "./components/Page";
import DataLoader from "./components/services/DataLoader";


const MainFolder = () => {

    const FilmDownload = (url) => {

        let films = [];
    
        let film = DataLoader.getData(url)
    
        if (film) {
            film.entity.map(function (entity) {
                films.push(entity);
            });
            return films;
        }
    
    }

    return (<>
            <Menu value="http://localhost:8080/films/filmImg"/>
            <Page value={FilmDownload('http://localhost:8080/films/all')}/>
            </>
    );
}

export default MainFolder