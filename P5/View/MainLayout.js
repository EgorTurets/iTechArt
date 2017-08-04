import React, {Component} from 'react'
import RegisterFormController from '../Controller/RegisterFormController'

export default class MainLayout extends Component {
    render() {

        return (
            <div>
                <div id="menu-wrapper">
                    <div id="menu">
                        <ul>
                            <li className="current_page_item"><a href="#">Homepage</a></li>
                            <li><a href="#">Find</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                </div>
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}