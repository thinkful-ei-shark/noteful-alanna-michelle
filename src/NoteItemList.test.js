import React from 'react';
import ReactDOM from 'react-dom';
import NoteItemList from './NoteItemlist';

it ('renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<NoteItemList name = 'test' key={1}/>, div);

    ReactDOM.unmountComponentAtNode(div);