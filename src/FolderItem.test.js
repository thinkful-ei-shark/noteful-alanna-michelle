import React from 'react';
import ReactDOM from 'react-dom';
import FolderItem from './FolderItem';

it ('renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<FolderItem name = 'test' key={1}/>, div);

    ReactDOM.unmountComponentAtNode(div);
})