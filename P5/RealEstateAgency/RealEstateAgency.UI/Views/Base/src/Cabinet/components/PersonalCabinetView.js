import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import NotificationInfo from "../../Common/components/NotificationBoxView";

export default class PersonalCabinet extends Component {
    componentWillMount() {
        this.props.UserInit();
    }

    render() {

        if (this.props.currentUser.canRedirect) {
            return (<Redirect to="/login"/>)
        }

        let listOfNotices = this.props.currentUser.notifications.map((notice) =>
            <li key={`notice-${notice.Id}`} className="notification-box">
                <NotificationInfo data={notice}/>
                <input type="button" className="button"
                       id={notice.Id}
                       onClick={this.props.Delete}
                       value="Delete notification"/>
            </li>);

        return(
            <div>
                <div className="log-out">
                    <input type="button" className="button" value="Log Out"
                        onClick={this.props.LogOut}/>
                </div>
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
                        <div>Notifications: </div>
                        <ul>{listOfNotices}</ul>
                    </li>
                </ul>
                <NavLink to={`${this.props.match.url}/add`}
                    className="button button-left-margin">
                    Add notification
                </NavLink>
            </div>
        )
    }
}