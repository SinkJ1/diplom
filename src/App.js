import React, { useState } from 'react';
import './App.css';
import TestAxios from './components/TestAxios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NotAutoriziedUserButtonHeader from './components/NotAuoriziedUserButtonHeader'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainFolder from './MainFolder';
import NotFoundPage from './components/NotFoundPage';
import FilmPage from './components/FilmPage';
import AutorizedUserButton from './components/AutoriziedUserButtonHeader';
//import ReactPlayer from 'react-player'

/*
<ReactPlayer
url='E:\Torrents\qq\Криминальное.чтиво.Pulp.Fiction.1994.BDRip-HEVC.mkv'
controls='true'
width='900px'
height='500px'
 />*/

let buttons;
const filmPage = (props) => {
    return (<FilmPage value={props.match.params.id} />);
}

function App() {
  const [isAutorize,setIsAutrize] = useState(false);
  if(isAutorize){
    buttons = <AutorizedUserButton />;
  } else {
    buttons = <NotAutoriziedUserButtonHeader />;
  }
  
  return (<>
  <TestAxios />
    <Router>
      <Header value={buttons} />
      <Switch>
        <Route exact path="/" component={MainFolder} />
        <Route path="/film/:id" component={filmPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
    <Footer />
  </>);
}

export default App;
