import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class LigIn extends Component {
    render() {
        console.log(this.props);

        if (this.props.logIn.isCanRedirect) {
            return (<Redirect to="/user"/>)
        }

        return(
            <form className="form-inner-center">
                <ul className="input-form-list">
                    <li>
                        <div>Email: </div>
                        <input
                            id="email"
                            type="email"
                            value={this.props.logIn.email}
                            onChange={this.props.EmailUpdate}/>
                    </li>
                    <li>
                        <div>Password: </div>
                        <input
                            id="password"
                            type="password"
                            value={this.props.logIn.password}
                            onChange={this.props.PassUpdate}/>
                    </li>
                </ul>
                <p id="logIn-message"
                   className="message-paragraph">
                    {this.props.logIn.message}
                </p>
                <div className="button" onClick={this.props.LogIn}>Log In</div>
            </form>
        )
    }
}