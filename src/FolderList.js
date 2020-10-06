import React from 'react';
import FolderItem from './FolderItem';
import './FolderList.css'

export default function FolderList(props){
    const list = props.folders.map((folder) => {
            return(
                <FolderItem onClick={() => props.getFolderId(folder.id)} key = {folder.id} id = {folder.id} name= {folder.name} />
            )
        })
    return (
        <div className= 'folders'>
            <ul>
                {list}
            </ul>
        </div>
    )
}