import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Basement from './components/Basement';
import Menu from './components/SlideMenu';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const main = () => {
  return (<><Header />
    <Menu />
    <Body />
    <Basement />
    </>);
}

const about = () => {
  return (<div>lkjsdag;lkjn</div>);
}

function App() {


  return (
    <>
    <Router>
            <Switch>
                <Route path="/main" component={main} />
                <Route path="/about" component={about} />
            </Switch>
        </Router>
        </>
  );
}

export default App;
