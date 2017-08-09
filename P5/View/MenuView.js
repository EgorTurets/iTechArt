import React, {Component} from 'react'
import { NavLink }  from 'react-router-dom'

export default class TopMenu extends Component {
    render() {

        return (
            <ul>
                <li><NavLink exact to="/"
                    activeClassName="current_page_item">
                    Homepage
                </NavLink></li>
                <li><NavLink exact to="/user"
                    activeClassName="current_page_item">
                    Personal cabinet
                </NavLink></li>
                <li><NavLink exact to="/login"
                    activeClassName="current_page_item">
                    Log In
                </NavLink></li>
                <li><NavLink to="/search"
                    activeClassName="current_page_item">
                    Search
                </NavLink></li>
            </ul>
        )
    }
}