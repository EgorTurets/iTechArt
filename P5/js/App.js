import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route} from 'react-router'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RegisterFormController from "../Controller/RegisterFormController"
import configureStore from "../store/configureStore";

import PersonalCabinet from '../View/PersonalCabinetView'
import MainLayout from "../View/MainLayout";
import {BrowserRouter, Switch} from 'react-router-dom'

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            <MainLayout>
                <BrowserRouter>
                    <Switch>
                    {/*<Route path="" component={MainLayout}>*/}
                        <Route path="" component={RegisterFormController}/>
                        <Route path="/temp2" component={PersonalCabinet}/>
                    {/*</Route>*/}
                    </Switch>
                </BrowserRouter>
            </MainLayout>




            {/*<RegisterFormController/>*/}


            {/*<Router history={browserHistory}>*/}
                {/*<Route path="/" component={RegisterFormController}>*/}
                    {/*/!*<IndexRoute component={RegisterFormController} />*!/*/}
                    {/*<Route path="/cabinet" component={PersonalCabinet}/>*/}
                {/*</Route>*/}
            {/*</Router>*/}
        </Provider>,
    document.getElementById('root')
);





