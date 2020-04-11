import React from 'react';
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
import NewsFilmsPage from './NewsFilmsPage';
import BestsFilm from './BestsFilm';
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
  return (<FilmPageByActor value={props.match.params.name}/>);
}

const filmPageByCountry = (props) => {
  return (<FilmPageByCountry value={props.match.params.name}/>);
}

function App() {
  console.log((new Date().getFullYear()))
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
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
    <Footer />
  </>);
}

export default App;
