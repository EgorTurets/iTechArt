import React, {Component} from 'react'

export default class PersonalCabinet extends Component {
    render() {
        console.log('PersonalCabinet:');
        console.log(this.props);

        return(
            <ul className="user-info-list">
                <li>
                    <span>First Name: </span>
                    <span id="first-name"
                        className="user-info-red">{this.props.currentUser.firstName}</span>
                </li>
                <li>
                    <span>Last Name: </span>
                    <label id="last-name"
                       className="user-info-red">{this.props.currentUser.lastName}</label>
                </li>
                <li>
                    <span>Email: </span>
                    <label id="email"
                       className="user-info-red">{this.props.currentUser.email}</label>
                </li>
                <li>
                    <div>Notices: </div>

                </li>
                <input type="submit" value="Test1" onClick={this.props.UserInit}/>
                <input type="submit" value="Test2" onClick={this.props.Register}/>

            </ul>
        )
    }
}