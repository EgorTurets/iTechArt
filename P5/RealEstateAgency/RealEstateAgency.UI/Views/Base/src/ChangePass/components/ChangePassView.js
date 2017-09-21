import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class ChangePass extends Component {
    componentWillMount(){
        debugger;
        let queryParamsRegExp = /id=(\d+)&token=([\w-]{36})$/;
        let userId, resetToken;
        this.props.location.search.replace(queryParamsRegExp, function (str, id, token) {
            userId = id;
            resetToken = token;
        });
        this.props.ChangePassInit(userId, resetToken);
    }

    render() {
        return(
            <div>
                <form className="form-inner-center" onSubmit={this.props.SubmitForm}>
                    <div>New Password:</div>
                    <input
                         id="newPassword"
                         type="password"
                         value={this.props.changePassState.password}
                         onChange={this.props.PasswordUpdate}/>
                    <div>Confirm:</div>
                    <input
                        id="confirm"
                        type="password"
                        value={this.props.changePassState.confirm}
                        onChange={this.props.ConfirmUpdate}/>

                    <p id="logIn-message"
                        className="message-paragraph">
                         {this.props.changePassState.message}
                    </p>
                    <input type="submit" className="button" value="Reset password"/>
                </form>
            </div>
        )
    }
}