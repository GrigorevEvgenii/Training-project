import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import store from "./Redux/store-redux";
import App from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const render = (state) => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}

render(store.getState());
