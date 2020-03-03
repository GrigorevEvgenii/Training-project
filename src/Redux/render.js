import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import {addPost, newText} from "./state"

export const render = (state) => {
    ReactDOM.render(<App addPost={addPost} newText={newText} state={state}/>, document.getElementById('root'));
}
