import React, {Component} from 'react'

export default class RegisterForm extends Component {
    render() {

        return(
            <form>
                <label>Hello {state.user.firstName}</label>
                <ul>
                    <li>
                        <div>First Name: </div>
                        <input
                            id="first-name"
                            type="text"
                            value={this.props.user.firstName}
                            onChange={this.props.FirstNameUpdate}/>
                    </li>
                    <li>
                        <div>Last Name: </div>
                        <input
                            id="last-name"
                            type="text"
                            value={this.props.user.lastName}
                            onChange={this.props.LastNameUpdate}/>
                    </li>
                    <li>
                        <div>Email: </div>
                        <input
                            id="email"
                            type="email"
                            value={this.props.user.email}
                            onChange={this.props.EmailUpdate}/>
                    </li>
                    <li>
                        <div>Password: </div>
                        <input
                            id="password"
                            type="password"
                            value={this.props.user.password}
                            onChange={this.props.PasswordUpdate}/>
                    </li>
                    <li>
                        <div>Confirm password: </div>
                        <input
                            id="confirm"
                            type="password"
                            value={this.props.user.confirm}
                            onChange={this.props.ConfirmUpdate}/>
                    </li>
                </ul>
                <input type="submit" value="Register" onClick={this.props.Register}/>
            </form>
        )
    }
}