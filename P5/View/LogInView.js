import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class LigIn extends Component {
    render() {
        console.log(this.props);

        if (this.props.logIn.isCanRedirect) {
            return (<Redirect to="/user"/>)
        }

        return(
            <form>
                <ul className="user-info-list">
                    <li>
                        <div>Email: </div>
                        <input
                            id="email"
                            type="email"
                            value={this.props.email}
                            onChange={this.props.EmailUpdate}/>
                    </li>
                    <li>
                        <div>Password: </div>
                        <input
                            id="password"
                            type="password"
                            value={this.props.password}
                            onChange={this.props.PassUpdate}/>
                    </li>
                </ul>
                <p id="logIn-message">{this.props.message}</p>
                <div className="button" onClick={this.props.LogIn}>Log In</div>
            </form>
        )
    }
}