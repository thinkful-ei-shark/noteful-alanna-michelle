import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css'
import MainPage from './MainPage';
import FolderPage from './FolderPage';

import store from './store.js';

class App extends Component {
    state = {
     folderId: '',
  }

    getFolderID(folderID){
      this.setState({folderID})   
    }
  
    render(){
      return (
        <div>
        <Route 
          exact path = '/'
          component = {MainPage}
          />
        <Route
          path = '/folders/:folderId'
          render = {() => <FolderPage folderId = {this.state.folderId}/>}
          />
        </div>
      )
     }
}

export default App;


