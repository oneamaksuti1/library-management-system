import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter, Route, Switch, NavLink , Redirect} from "react-router-dom";
import { booksub } from "./pages/subscribers/booksub";
import { audiosub } from "./pages/subscribers/audiosub";

function DashboardSub({ authorized }) {
  if(!authorized){
    return <Redirect to="/login"/>
  }

  return (
    <>
      <BrowserRouter>
        <div className="App container" id='Staf'>
          <h3 className="d-flex justify-content-center m-3">
            Subscriber's Page
          </h3>

          <nav className="navbar navbar-expand-sm bg-light navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item- m-1">
                <NavLink className="btn btn-light btn-outline-primary" to="/book">
                  Book
                </NavLink>
              </li>
              <li className="nav-item- m-1">
                <NavLink className="btn btn-light btn-outline-primary" to="/audiobook">
                  Audio Book
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/book' component={booksub}/>
            <Route path='/audiobook' component={audiosub}/>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default DashboardSub;
