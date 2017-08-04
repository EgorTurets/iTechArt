import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import { Route } from 'react-router'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from "../store/configureStore";

import MainLayout from "../View/MainLayout";
import CabinetController from "../Controller/CabinetController";
import RegisterFormController from "../Controller/RegisterFormController"

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            {/*<MainLayout>*/}
                <BrowserRouter>
                    <MainLayout>
                        {/*<Switch>*/}
                        {/*<Route path="" component={MainLayout}>*/}
                            <Route exact path="/" component={RegisterFormController}/>
                        <Route path="/temp1" component={CabinetController}/>
                            <Route path="/temp2" component={CabinetController}/>
                        {/*</Route>*/}
                        {/*</Switch>*/}
                    </MainLayout>
                </BrowserRouter>
            {/*</MainLayout>*/}
        </Provider>,
    document.getElementById('root')
);





