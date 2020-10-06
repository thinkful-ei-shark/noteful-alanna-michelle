import React from 'react';
import NoteItemList from './NoteItemList';
import './NoteList.css';

export default function NoteList(props){
    const filterList = function() {
        if(props.folderId){
            return props.notes.filter(note => note.folderId === props.folderId) 
         }else {
            return props.notes
        }
        
    }

    const finalList = filterList().map((note) => {
            return(
                <NoteItemList key = {note.id} name= {note.name} id= {note.id} folderId= {note.folderId}/>
            )
        })


    return (
        <div className= 'notes'>
            <ul>
                {finalList}
            </ul>
        </div>
    )
}