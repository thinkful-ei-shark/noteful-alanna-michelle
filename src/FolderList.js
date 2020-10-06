import React from 'react';

export default function FolderList(props){
    const list = props.folders.map((folder, key) => {
            return(
                <li key = {folder.id}>
                    <h3>{folder.name}</h3>
                </li>
            )
        })
    return (
        <ul>
            {list}
        </ul>
    )
}