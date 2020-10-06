import React from 'react';
import {Link} from 'react-router-dom'

export default function NoteItemList(props){
    return (
        <li>
            <Link to={'/notes/'+ props.id}>
                <h3>{props.name}</h3>
            </Link>
        </li>
    )
}