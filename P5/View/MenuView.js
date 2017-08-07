import React, {Component} from 'react'
import { Link }  from 'react-router-dom'

export default class TopMenu extends Component {
    render() {

        return (
            <ul>
                <li className="current_page_item"><Link to="/">Homepage</Link></li>
                <li><Link to="/user?">Personal cabiner</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        )
    }
}