import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {store} from "./Redux/store";
import App from "./App";

export const render = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}

render(store.getState());

store.subscribe(render);