import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import NotificationInfo from "./NotificationBoxView";

export default class PersonalCabinet extends Component {
    componentDidMount() {
        if(this.props.currentUser.id === 0) {
            this.props.UserInit();
        }
    }

    render() {
        console.log('PersonalCabinet:');
        console.log(this.props);

        if (this.props.currentUser.isCanRedirect) {
            return (<Redirect to="/login"/>)
        }

        let listOfNotices = this.props.currentUser.notifications.map((notice) =>
            <li key={`notice-${notice.id}`} className="notification-box">
                <NotificationInfo data={notice}/>
                <div className="button"
                     id={notice.id}
                     onClick={this.props.Delete}>
                    Delete notification
                </div>
            </li>);

        return(
            <div>
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