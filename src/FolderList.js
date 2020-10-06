import React from 'react';
import FolderItem from './FolderItem';

export default function FolderList(props){
    const list = props.folders.map((folder) => {
            return(
                <FolderItem key = {folder.id} name= {folder.name} />
            )
        })
    return (
        <ul>
            {list}
        </ul>
    )
}