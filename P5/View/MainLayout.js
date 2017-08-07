import React, {Component} from 'react'
import { Link }  from 'react-router-dom'
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
                <div id="header-wrapper">
                    <div id="header">
                        <div id="logo">
                            <h1><Link to="/">iTech<span>Art</span> Task</Link></h1>
                            <p>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a></p>
                        </div>
                    </div>
                </div>
                <div id="page">
                    <div id="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}