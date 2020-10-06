import React from 'react';
import Header from './Header';
import FolderList from './FolderItem';
import NoteList from './NoteList';
import store from './store';


export default class FolderPage extends React.Component {
    state = {
        folders: store.folders,
        notes: store.notes
    }

    render(){
        return (
        <div class='FolderPage'>
            <Header />
            <main>
                <FolderList folders={this.state.folders}/>
                <NoteList notes = {this.state.notes} folderId = {this.props.folderId}/>
            </main>
        </div>
        
        )
    }
}