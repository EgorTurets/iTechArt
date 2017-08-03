import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RegisterFormController from "../Controller/RegisterFormController"
import configureStore from "../store/configureStore";

const store = configureStore();

ReactDOM.render((
        <Provider store={store}>
            <RegisterFormController/>
        </Provider>
    ),
    document.getElementById('content')
);





