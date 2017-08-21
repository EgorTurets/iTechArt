import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";

import MainLayout from "./components/MainLayout";

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
                    <MainLayout/>
                </BrowserRouter>
        </Provider>,
    document.getElementById('root')
);





