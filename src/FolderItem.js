import React from 'react';
import {Link} from 'react-router-dom';

export default function FolderItem(props){
    console.log(props.match)
    return (
        <li>
            <Link to={'/folders/' + props.id}>
                <h3>{props.name}</h3>
             </Link>
        </li>
    )
}