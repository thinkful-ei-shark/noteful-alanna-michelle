import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css'
import MainPage from './MainPage';
import FolderPage from './FolderPage';
import NotePage from './NotePage';

import store from './store.js';

class App extends Component {

    render(){
      return (
        <div>
        <Route 
          exact path = '/'
          component ={MainPage}
          />
        <Route
          path = '/folders/:folderId'
          component={FolderPage}
          />
        <Route
          path= '/notes/:noteId'
          component={NotePage}
          />
        </div>
      )
     }
}

export default App;


