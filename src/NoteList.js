import React from 'react';
import NoteItemList from './NoteItemList';
import './NoteList.css';

export default function NoteList(props){
    const list = props.notes.map((note) => {
            return(
                <NoteItemList key = {note.id} name= {note.name} />
            )
        })
    return (
        <div className= 'notes'>
            <ul>
                {list}
            </ul>
        </div>
    )
}