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
            <Menu />
            <Page value={FilmDownload('http://192.168.100.4:8080/films/all')}/>
            </>
    );
}

export default MainFolder