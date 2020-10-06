import React from 'react';
import Header from './Header';
import FolderList from './FolderList';
import NoteItemList from './NoteItemList';
import store from './store';


export default class NotePage extends React.Component {
    state = {
        folders: store.folders,
        notes: store.notes,
    }

    render(){
        const id = this.props.match.params.noteId;
        const note = this.state.notes.find(note => note.id === id);

        return (
            <div className='NotePage'>
                <Header />
                <main>
                    <FolderList folders={this.state.folders}/>
                    <ul>
                        <NoteItemList id={id} name={note.name}/>
                        <li>{note.content}</li>
                    </ul>
                    
                </main>
            </div>
        )
    }
}
