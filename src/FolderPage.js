import React from 'react';
import Header from './Header';
import FolderList from './FolderList';
import NoteList from './NoteList';
import store from './store';
import './FolderPage.css'


export default class FolderPage extends React.Component {
    state = {
        folders: store.folders,
        notes: store.notes,
    }

    render(){
        return (
            <div className='FolderPage'>
                <Header />
                <main>
                    <FolderList folders={this.state.folders}/>
                    <NoteList notes = {this.state.notes} folderId = {this.props.match.params.folderId}/>
                </main>
            </div>
        
        )
    }
}