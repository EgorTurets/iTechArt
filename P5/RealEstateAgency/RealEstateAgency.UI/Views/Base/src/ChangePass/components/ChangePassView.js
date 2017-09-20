import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class ChangePass extends Component {


    // componentWillMount() {
    //     this.props.LogInInit();
    // }
    //
    // render() {
    //
    //     if (this.props.logInState.canRedirect) {
    //
    //         return (<Redirect to="/user"/>)
    //     }
    //
    //     if (this.props.logInState.isPassForgot) {
    //
    //         return (
    //             <div>
    //                 <form className="form-inner-center" onSubmit={this.props.ResetPass}>
    //                     <div>Email:</div>
    //                     <input
    //                         id="email"
    //                         type="email"
    //                         value={this.props.logInState.email}
    //                         onChange={this.props.EmailUpdate}/>
    //
    //                     <p id="logIn-message"
    //                        className="message-paragraph">
    //                         {this.props.logInState.message}
    //                     </p>
    //                     <input type="submit" className="button" value="Reset password"/>
    //                 </form>
    //             </div>
    //         );
    //     }
    // }
}