import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './nav-and-foot/nav';
import TargetApp from './todays-target/targetApp';
import PromptApp from './prompt-gen/promptApp.js';
import Foot from './nav-and-foot/foot';
import './index.css'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.Fragment>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={TargetApp} />
        <Route path="/todays-target" component={TargetApp} />
        <Route path="/prompt" component={PromptApp} />
      </Switch>
      <Foot />
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
