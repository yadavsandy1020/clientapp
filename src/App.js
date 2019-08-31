import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/Login';
import Header from './components/Header';
import Tweets from './components/Tweets'


import './App.css'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <Switch>
        <Route exact path = '/home' component = {Login}></Route>
        <Route exact path = '/' component = {Login}></Route>

        <Route path = '/tweets' component = {Tweets}></Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
