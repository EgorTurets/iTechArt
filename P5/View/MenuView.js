import React, {Component} from 'react'
import RegisterFormController from '../Controller/RegisterFormController'
import { Link }  from 'react-router-dom'

export default class TopMenu extends Component {
    render() {

        return (
            <ul>
                <li className="current_page_item"><Link to="/">Homepage</Link></li>
                <li><Link to="/user">Find</Link></li>
                <li><Link to="/temp2">Log In</Link></li>
            </ul>
        )
    }
}