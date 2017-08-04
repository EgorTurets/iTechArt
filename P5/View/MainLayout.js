import React, {Component} from 'react'
import RegisterFormController from '../Controller/RegisterFormController'
import { BrowserRouter, Link }  from 'react-router-dom'
import TopMenu from "./MenuView";

export default class MainLayout extends Component {
    render() {

        return (
            <div>
                <div id="menu-wrapper">
                    <div id="menu">
                        <TopMenu/>
                    </div>
                </div>
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}