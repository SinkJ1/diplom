import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Basement from './components/Basement';
import Menu from './components/SlideMenu';
import NotAutoriziedUserButtonHeader from './components/NotAuoriziedUserButtonHeader'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const main = () => {
  return (
    <>
    <Menu />
    <Body />
    <Basement />
    </>);
}

const about = () => {
  return (<div>about</div>);
}

function App() {


  return (
    <>
    <Header value={<NotAutoriziedUserButtonHeader />}/>
    <Router>
            <Switch>
                <Route path="/" component={main} />
                <Route path="/about" component={about} />
            </Switch>
        </Router>
        </>
  );
}

export default App;
