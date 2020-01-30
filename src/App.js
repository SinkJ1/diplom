import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NotAutoriziedUserButtonHeader from './components/NotAuoriziedUserButtonHeader'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainFolder from './MainFolder';
import NotFoundPage from './components/NotFoundPage';
import FilmPage from './components/FilmPage';
import Test from './components/Test';
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


function App() {

  return (
    <>
      {<Test />}
      <Router>
        <Header value={<NotAutoriziedUserButtonHeader />}/>
            <Switch>
                <Route exact path="/" component={MainFolder} />
                <Route path="/film/:id" component={filmPage} />
                <Route component={NotFoundPage} />
            </Switch>
      </Router>
    <Footer />
    </>
  );
}

export default App;
