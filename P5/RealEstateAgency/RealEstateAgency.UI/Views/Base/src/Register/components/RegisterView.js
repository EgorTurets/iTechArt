import React, {Component} from 'react'
import { Redirect } from 'react-router'

export default class RegisterForm extends Component {
    render() {

        return(
            <form className="form-inner-center" onSubmit={this.props.Register}>
                <ul className="input-form-list">
                    <li>
                        <div>First Name: </div>
                        <input
                            id="firstName"
                            type="text"
                            value={this.props.newUser.firstName}
                            onChange={this.props.FirstNameUpdate}/>
                    </li>
                    <li>
                        <div>Last Name: </div>
                        <input
                            id="lastName"
                            type="text"
                            value={this.props.newUser.lastName}
                            onChange={this.props.LastNameUpdate}/>
                    </li>
                    <li>
                        <div>Email: </div>
                        <input
                            id="email"
                            type="email"
                            value={this.props.newUser.email}
                            onChange={this.props.EmailUpdate}/>
                    </li>
                    <li>
                        <div>Password: </div>
                        <input
                            id="password"
                            type="password"
                            value={this.props.newUser.password}
                            onChange={this.props.PasswordUpdate}/>
                    </li>
                    <li>
                        <div>Confirm password: </div>
                        <input
                            id="confirm"
                            type="password"
                            value={this.props.newUser.confirm}
                            onChange={this.props.ConfirmUpdate}/>
                    </li>
                </ul>
                <p
                    id="register-message"
                    className="message-paragraph">
                    {this.props.newUser.message}
                </p>
                <input type="submit" className="button" value="Register"/>
            </form>
        )
    }
}