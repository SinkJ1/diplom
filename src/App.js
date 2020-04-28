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
import Player from './components/Player';
import FilmByGenre from './FilmByGenre';
import AdminFolder from './AdminFolder';

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
        <Route path="/test" component={Player} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
    <Footer />
  </>);
}

export default App;
