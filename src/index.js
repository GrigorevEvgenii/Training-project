import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {store} from "./Redux/state";
import App from "./App";

export const render = (state) => {
    ReactDOM.render(<App state={state} addPost={store.addPost.bind(store)} newText={store.newText.bind(store)} />, document.getElementById('root'));
}

render(store.getState());

store.subscribe(render);