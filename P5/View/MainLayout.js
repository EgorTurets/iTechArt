import React, {Component} from 'react'
import { BrowserRouter, Route, Link }  from 'react-router-dom'
import TopMenu from "./MenuView";
import RegisterFormController from '../Controller/RegisterFormController'
import CabinetController from '../Controller/CabinetController'
import LogInController from '../Controller/LogInController'
import AddNotificationController from "../Controller/AddNotificationController";
import SearchController from "../Controller/SearchController";

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
                                <p>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a></p>
                            </div>
                        </div>
                    </div>
                    <div id="page">
                        <div id="content">
                            <Route exact path="/" component={RegisterFormController}/>
                            <Route exact path="/user" component={CabinetController}/>
                            <Route path="/user/add" component={AddNotificationController}/>
                            <Route path="/login" component={LogInController}/>
                            <Route path="/search" component={SearchController}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}