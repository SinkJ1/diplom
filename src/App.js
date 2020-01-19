import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Basement from './components/Basement';
import Menu from './components/SlideMenu';
import NotAutoriziedUserButtonHeader from './components/NotAuoriziedUserButtonHeader'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FilmPage from './FilmPage';
//import ReactPlayer from 'react-player'
const main = () => {
  return (
    <>
    <Menu />
    <Body />
    </>);
}

const about = (props) => {
return (<FilmPage value={props.match.params.id} />);
}

const NotFound = () => {
  return (<div>NotFound</div>);
}
//return <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
function App() {


  return (
    <>
    <Header value={<NotAutoriziedUserButtonHeader />}/>
      <Router>
            <Switch>
                <Route exact path="/" component={main} />
                <Route path="/film/:id" component={about} />
                <Route component={NotFound} />
            </Switch>
      </Router>
    <Basement />
    </>
  );
}

export default App;
