import React from 'react';
import ReactDOM from 'react-dom'

import FavoriteNum from './FavoriteNum'
import { number } from 'prop-types';

test('renders a number input with a label faborite number', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FavoriteNum/>, div) 
    
    // console.log(div.innerHTML)

    //1 - check input
    expect(div.querySelector('input').type).toBe('number')
    //1 - check label
    expect(div.querySelector('label').textContent).toBe('Favorite Number')

});