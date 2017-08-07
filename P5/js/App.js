import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from "../store/configureStore";

import MainLayout from "../View/MainLayout";
import CabinetController from "../Controller/CabinetController";
import RegisterFormController from "../Controller/RegisterFormController"
import LogInController from "../Controller/LogInController";

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            {/*<MainLayout>*/}
                <BrowserRouter>
                    <MainLayout/>
                </BrowserRouter>
            {/*</MainLayout>*/}
        </Provider>,
    document.getElementById('root')
);





