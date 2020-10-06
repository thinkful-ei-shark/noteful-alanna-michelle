import React from 'react';
import ReactDOM from 'react-dom';
import FolderList from './FolderList';

it ('renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<FolderList folders={[{name: 'A'}, {name: 'B'}, {name: 'C'}]}/>, div);

    ReactDOM.unmountComponentAtNode(div);
})