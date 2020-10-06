import React from 'react';

export default function FolderItem(props){
    return (
        <li>
        <Link to='/folders'>
        <h3>{props.name}</h3>
        </Link>
        </li>
    )
}