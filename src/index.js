import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let post = [
    {id: 1, text: 'Hi, how are you?', likesCount: 12},
    {id: 2, text: 'It\'s my first post', likesCount: 11},
    {id: 3, text: 'Blabla', likesCount: 11},
    {id: 4, text: 'Dada', likesCount: 11}
  ]

ReactDOM.render(<App posts={post} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
