import React, {Component} from 'react'
import { BrowserRouter, Route, Link }  from 'react-router-dom'
import TopMenu from "./MenuView";
import RegisterFormController from '../../Register/containers/RegisterFormController'
import CabinetController from '../../Cabinet/containers/CabinetController'
import LogInController from '../../LogIn/containers/LogInController'
import AddNotificationController from "../../Cabinet/containers/AddNotificationController";
import SearchController from "../../Search/containers/SearchController";
import ChangePassController from "../../ChangePass/containers/ChangePassController";

export default class MainLayout extends Component {

    render() {

        return (
            <BrowserRouter>
                <div>
                    <div id="menu-wrapper">
                        <div id="menu">
                            <TopMenu/>
                        </div>
                    </div>
                    <div id="header-wrapper">
                        <div id="header">
                            <div id="logo">
                                <h1><Link to="/"><span>i</span>Tech<span>Art</span> Task</Link></h1>
                            </div>
                        </div>
                    </div>
                    <div id="page">
                        <div id="content">
                            <Route exact path="/" component={SearchController}/>
                            <Route exact path="/user" component={CabinetController}/>
                            <Route path="/user/add" component={AddNotificationController}/>
                            <Route path="/login" component={LogInController}/>
                            <Route path="/register" component={RegisterFormController}/>
                            <Route path="/ChangePass" component={ChangePassController}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}