import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainFolder from './MainFolder';
import NotFoundPage from './components/NotFoundPage';
import FilmPage from './components/FilmPage';
import GlobalState from "./components/GlobalState"
import UserPage from "./UserPage"
import FilmPageByActor from './FilmPageByActor';
import FilmPageByCountry from './FilmPageByCountry';
import NewsFilmsPage from './ComingSoonFilms';
import BestsFilm from './BestsFilm';
import "bootstrap/dist/css/bootstrap.css"
import Test from './components/Test';
import reducer from './components/services/Test3';
import FilmByGenre from './FilmByGenre';
import AdminFolder from './AdminFolder';
//import ReactPlayer from 'react-player'

/*
<ReactPlayer
url='E:\Torrents\qq\Криминальное.чтиво.Pulp.Fiction.1994.BDRip-HEVC.mkv'
controls='true'
width='900px'
height='500px'
/>*/

const filmPage = (props) => {
  return (<FilmPage value={props.match.params.id} />);
}

const filmPageByActor = (props) => {
  return (<FilmPageByActor value={props.match.params.name} />);
}

const filmPageByCountry = (props) => {
  return (<FilmPageByCountry value={props.match.params.name} />);
}

const filmPageByGenre = (props) => {
  return (<FilmByGenre value={props.match.params.name} />);
}

const adminPage = () => {
  return localStorage.getItem("role") === "admin" && localStorage.getItem("onLogin") === 'true' ? <AdminFolder/> : <MainFolder/>;
}

function App() {
  
  const [state, setState] = useState(0);
  let url = 'http://localhost:8080/films/test'
  const data = "example";

  const kol = () => {
    setState(state + 1);
    (async () => {try {
      const response = await fetch(url, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  })();
  }
  return (<>
    <Router>
      <div id="headerAnchor">
        <Header value={<GlobalState />} />
      </div>
      <Switch>
        <Route exact path="/" component={MainFolder} />
        <Route path="/film/:id" component={filmPage} />
        <Route path={"/filmByActor/:name"} component={filmPageByActor} />
        <Route path={"/filmByCountry/:name"} component={filmPageByCountry} />
        <Route path="/user/:userName" component={UserPage} />
        <Route path="/newsFilms" component={NewsFilmsPage} />
        <Route path="/bestsFilms" component={BestsFilm} />
        <Route path="/adminPage" component={adminPage} />
        <Route path="/filmsByGenre/:name" component={filmPageByGenre} />
        <Route path="/test" component={Test} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
    <Footer />
  </>);
}

export default App;
