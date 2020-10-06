import React from 'react';
import NoteItemList from './NoteItemList';

export default function NoteList(props){
    const list = props.notes.map((note) => {
            return(
                <NoteItemList key = {note.id} name= {note.name} />
            )
        })
    return (
        <ul>
            {list}
        </ul>
    )
}