import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/login/login';
import './App.css';
import { booksub } from "./pages/subscribers/booksub";
import { audiosub } from "./pages/subscribers/audiosub";


function App(){
  return(
      <Router>
          <Switch>
              <Route exact path="/" component={LoginPage}/>
              <Route exact path="/booksub" component={booksub}/>
              <Route exact path="/audiosub" component={audiosub}/>
              
          </Switch>
      </Router>
  )
}

export default App;
