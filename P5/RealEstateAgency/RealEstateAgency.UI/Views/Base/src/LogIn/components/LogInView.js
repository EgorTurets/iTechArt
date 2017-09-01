import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class LogIn extends Component {
    componentWillMount() {
        this.props.LogInInit();
    }

    render() {

        if (this.props.logInState.canRedirect) {
            return (<Redirect to="/user"/>)
        }

        return(
            <form className="form-inner-center" onSubmit={this.props.LogIn}>
                <ul className="input-form-list">
                    <li>
                        <div>Email: </div>
                        <input
                            id="email"
                            type="email"
                            value={this.props.logInState.email}
                            onChange={this.props.EmailUpdate}/>
                    </li>
                    <li>
                        <div>Password: </div>
                        <input
                            id="password"
                            type="password"
                            value={this.props.logInState.password}
                            onChange={this.props.PassUpdate}/>
                    </li>
                </ul>
                <p id="logIn-message"
                   className="message-paragraph">
                    {this.props.logInState.message}
                </p>
                <input type="submit" className="button" value="Log In"/>
            </form>
        )
    }
}