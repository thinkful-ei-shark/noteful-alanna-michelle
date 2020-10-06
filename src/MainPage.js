import React from 'react';
import Header from './Header';
import FolderList from './FolderList';
import NoteList from './NoteList';
import store from './store';

export default class MainPage extends React.Component {
    state = {
        folders: store.folders,
        notes: store.notes,
    }

    render() {
        return (
            <div className='mainPage'>
                <Header />
                <main>
                    <FolderList folders={this.state.folders}/>
                    <NoteList notes={this.state.notes}/>
                </main>
            </div>
        )
    }
}