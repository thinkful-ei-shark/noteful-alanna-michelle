import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css'
import MainPage from './MainPage';

import store from './store.js';

class App extends Component {
    state = {
     folders: store.folders,
     notes: store.notes,
  }
  
    render(){
      return (
        
        <Route 
          path = '/'
          component = {MainPage}
          />
      )
     }
}

export default App;


